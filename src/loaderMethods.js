export const topicLoader = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/quiz')
    const data = res.json()
    return data
}

export const topicQuesLoader = async (params) => {
    const {id} = params
    const res = await fetch(`https://openapi.programming-hero.com/api/quiz/${id}`)
    const data = res.json()
    return data
}