// Supabase Storage Service
import { supabase, STORAGE_BUCKETS } from '../config.js'

export class StorageService {
  // Upload file to storage bucket
  static async uploadFile(bucket, file, path = '', options = {}) {
    try {
      const fileName = `${Date.now()}-${file.name}`
      const filePath = path ? `${path}/${fileName}` : fileName

      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false,
          ...options
        })

      if (error) throw error

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(filePath)

      return {
        success: true,
        data: {
          path: filePath,
          url: urlData.publicUrl,
          fileName
        },
        message: 'File uploaded successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to upload file'
      }
    }
  }

  // Upload image
  static async uploadImage(file, path = 'images') {
    return this.uploadFile(STORAGE_BUCKETS.IMAGES, file, path, {
      contentType: file.type
    })
  }

  // Upload document
  static async uploadDocument(file, path = 'documents') {
    return this.uploadFile(STORAGE_BUCKETS.DOCUMENTS, file, path, {
      contentType: file.type
    })
  }

  // Upload PDF
  static async uploadPDF(file, path = 'pdfs') {
    return this.uploadFile(STORAGE_BUCKETS.PDFS, file, path, {
      contentType: 'application/pdf'
    })
  }

  // Upload avatar
  static async uploadAvatar(file, userId) {
    return this.uploadFile(STORAGE_BUCKETS.AVATARS, file, `users/${userId}`, {
      contentType: file.type
    })
  }

  // Delete file
  static async deleteFile(bucket, path) {
    try {
      const { error } = await supabase.storage
        .from(bucket)
        .remove([path])

      if (error) throw error

      return {
        success: true,
        message: 'File deleted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete file'
      }
    }
  }

  // Get file URL
  static getFileURL(bucket, path) {
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(path)

    return data.publicUrl
  }

  // Download file
  static async downloadFile(bucket, path) {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .download(path)

      if (error) throw error

      return {
        success: true,
        data,
        message: 'File downloaded successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to download file'
      }
    }
  }

  // List files in bucket
  static async listFiles(bucket, path = '', limit = 100) {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .list(path, {
          limit,
          offset: 0
        })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Files listed successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to list files'
      }
    }
  }

  // Get file info
  static async getFileInfo(bucket, path) {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .list(path.split('/').slice(0, -1).join('/'), {
          search: path.split('/').pop()
        })

      if (error) throw error

      return {
        success: true,
        data: data[0],
        message: 'File info retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to get file info'
      }
    }
  }

  // Create signed URL for private files
  static async createSignedURL(bucket, path, expiresIn = 3600) {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .createSignedUrl(path, expiresIn)

      if (error) throw error

      return {
        success: true,
        data: data.signedUrl,
        message: 'Signed URL created successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create signed URL'
      }
    }
  }
}
