const BASE_URL = import.meta.env.VITE_APP_API_URL

export interface PasteRequest {
  content: string
  language?: string
  author?: string
}

export interface PasteResponse {
  id: string
  content: string
  language?: string
  author?: string
  createdAt: string
}

export const getPaste = async (id: string): Promise<PasteResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/paste/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching paste:', error)
    throw error
  }
}

// POST request with body
export const createPaste = async (data: PasteRequest): Promise<PasteResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/paste`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error creating paste:', error)
    throw error
  }
}
