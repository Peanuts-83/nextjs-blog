import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkImages from 'remark-images'

const postDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
    // Get file names in /posts
    const fileNames = fs.readdirSync(postDirectory)
    // Get posts content
    const allPostsData = fileNames.map(fileName => {
        // Get id & rm .md
        const id = fileName.replace(/\.md$/, '')
        // Get file content
        const fullPath = path.join(postDirectory, fileName)
        const content = fs.readFileSync(fullPath, 'utf8')
        // Use gray-matter to get metadata from .md
        const matterResult = matter(content)

        return {
            id,
            ...matterResult.data,   // date & title
            content: content.split('\n---\n\n')[1]
        }
    })


    // Sort posts by date
    return allPostsData.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

// Feed getStaticPath & getStaticProps //
// for dynamic files [id].js //
export function getAllPostIds() {
    const fileNames = fs.readdirSync(postDirectory)

    return fileNames.map(fileName => {
        return {
            params: {                               // params required
                id: fileName.replace(/\.md$/, '')   // id: must be the dynamic name
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const processedContent = await remark()
        .use(remarkImages)
        .use(html)
        .process(matterResult.content)
    const contentHTML = processedContent.toString()

    return {
        id,
        contentHTML,
        ...matterResult.data
    }
}