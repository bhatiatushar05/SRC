// Supabase Team Service
import { supabase, TABLES } from '../config.js'

export class TeamService {
  // Get all team members
  static async getAllTeamMembers() {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM)
        .select('*')
        .eq('is_active', true)
        .order('order_index', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Team members retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve team members'
      }
    }
  }

  // Get team member by ID
  static async getTeamMemberById(id) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM)
        .select('*')
        .eq('id', id)
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Team member retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve team member'
      }
    }
  }

  // Create new team member
  static async createTeamMember(teamData) {
    try {
      // Get the next order index
      const { data: lastMember } = await supabase
        .from(TABLES.TEAM)
        .select('order_index')
        .order('order_index', { ascending: false })
        .limit(1)
        .single()

      const orderIndex = lastMember ? lastMember.order_index + 1 : 1

      const { data, error } = await supabase
        .from(TABLES.TEAM)
        .insert([{ ...teamData, order_index: orderIndex }])
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Team member created successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to create team member'
      }
    }
  }

  // Update team member
  static async updateTeamMember(id, updates) {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM)
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single()

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Team member updated successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to update team member'
      }
    }
  }

  // Delete team member (soft delete)
  static async deleteTeamMember(id) {
    try {
      const { error } = await supabase
        .from(TABLES.TEAM)
        .update({ is_active: false, updated_at: new Date().toISOString() })
        .eq('id', id)

      if (error) throw error

      return {
        success: true,
        message: 'Team member deleted successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to delete team member'
      }
    }
  }

  // Reorder team members
  static async reorderTeamMembers(memberIds) {
    try {
      const updates = memberIds.map((id, index) => ({
        id,
        order_index: index + 1
      }))

      const { error } = await supabase
        .from(TABLES.TEAM)
        .upsert(updates)

      if (error) throw error

      return {
        success: true,
        message: 'Team members reordered successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to reorder team members'
      }
    }
  }

  // Get featured team members
  static async getFeaturedTeamMembers() {
    try {
      const { data, error } = await supabase
        .from(TABLES.TEAM)
        .select('*')
        .eq('is_active', true)
        .eq('is_featured', true)
        .order('order_index', { ascending: true })

      if (error) throw error

      return {
        success: true,
        data,
        message: 'Featured team members retrieved successfully'
      }
    } catch (error) {
      return {
        success: false,
        error: error.message,
        message: 'Failed to retrieve featured team members'
      }
    }
  }
}
