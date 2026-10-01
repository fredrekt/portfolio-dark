export interface Skill {
  id: string
  skill: string
}

export interface SkillsQuery {
  gcms: {
    skills: Skill[]
  }
}

export interface ExperienceItem {
  id: string
  current: boolean
  startDate: string | null
  endDate: string | null
  company: string
  job: string
  jobDescription: string[]
}

export interface ExperiencesQuery {
  gcms: {
    experiences: ExperienceItem[]
  }
}

export interface CertificateItem {
  id: string
  date: string
  company: string
  title: string
  description: string[]
}

export interface CertificatesQuery {
  gcms: {
    certificates: CertificateItem[]
  }
}

export interface BlogPreviewItem {
  id: string
  title: string
  description: string
  blogCategory: string
  preview: {
    url: string
    previewBlog: { preview: { url: string } }[]
  }
}

export interface BlogsPreviewQuery {
  gcms: {
    blogs: BlogPreviewItem[]
  }
}

export interface BlogCardItem {
  id: string
  title: string
  description: string
  createdAt: string
  blogCategory: string
  content: { markdown: string }
  preview: { url: string }
}

export interface BlogCardsQuery {
  gcms: {
    blogs: BlogCardItem[]
  }
}

export interface Blog {
  blogCategory: string
  content: { markdown: string }
  id: string
  preview: { url: string } | null
  title: string
  createdAt: string
  description: string
}

export interface BlogPageQuery {
  gcms: {
    blog: Blog | null
  }
}

export interface WorkItem {
  id: string
  project: string
  link: string
  description: string
  previewImage: {
    url: string
    previewImageWork: { previewImage: { url: string } }[]
  }
}

export interface WorksQuery {
  gcms: {
    works: WorkItem[]
  }
}

export interface SeoQuery {
  site: {
    siteMetadata: {
      title: string
      description: string
      author: string
      siteUrl: string
      jobTitle: string
      locality: string
      region: string
      country: string
    }
  }
}

export interface BlogListQuery {
  gcms: {
    blogs: { id: string; title: string }[]
  }
}
