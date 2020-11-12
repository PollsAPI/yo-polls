export const getWhatsappLink = text => {
    return `https://api.whatsapp.com/send?text=${encodeURI(text)}`
}
export const getTwitterLink = text => {
    return `https://twitter.com/intent/tweet?text=${encodeURI(text)}`
}
