export const topicLoader = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/quiz')
    const data = res.json()
    return data
}