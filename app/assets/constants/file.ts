import type { TFiles, FilesOptionType } from '@type/files'

export const Files: Record<TFiles, FilesOptionType> = {
  image: {
    extensions: ['jpg', 'png', 'jpeg']
  },
  video: {
    extensions: ['m4v', 'avi', 'mpg', 'mp4', 'mkv', 'mov', 'mpeg']
  },
  excel: {
    extensions: ['csv', 'xls', 'xlsx']
  },
  word: {
    extensions: ['doc', 'docx']
  },
  pdf: {
    extensions: ['pdf']
  }
}
