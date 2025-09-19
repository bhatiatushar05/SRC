// Supabase Members Service
import { supabase, TABLES } from '../config.js'

export class MembersService {
  // Get all members
  static async getAllMembers() {
    try {
      const { data, error } = await supabase
        .from(TABLES.MEMBERS)
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Members retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve members'
      }
    }
  }

  // Get member by ID
  static async getMemberById(id) {
    try {
      const { data, error } = await supabase
        .from(TABLES.MEMBERS)
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Member retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve member'
      }
    }
  }

  // Create new member
  static async createMember(memberData) {
    try {
      const { data, error } = await supabase
        .from(TABLES.MEMBERS)
        .insert([memberData])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Member created successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create member'
      }
    }
  }

  // Update member
  static async updateMember(id, updates) {
    try {
      const { data, error } = await supabase
        .from(TABLES.MEMBERS)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Member updated successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update member'
      }
    }
  }

  // Delete member (soft delete)
  static async deleteMember(id) {
    try {
      const { error } = await supabase
        .from(TABLES.MEMBERS)
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      return {
        success: true,
        message: 'Member deleted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete member'
      }
    }
  }

  // Search members
  static async searchMembers(query) {
    try {
      const { data, error } = await supabase
        .from(TABLES.MEMBERS)
        .select('*')
        .or(`name.ilike.%${query}%,organization.ilike.%${query}%,position.ilike.%${query}%`)
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Search completed successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to search members'
      }
    }
  }

  // Get members by organization
  static async getMembersByOrganization(organization) {
    try {
      const { data, error } = await supabase
        .from(TABLES.MEMBERS)
        .select('*')
        .eq('organization', organization)
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Members retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve members'
      }
    }
  }
}
