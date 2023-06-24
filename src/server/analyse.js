const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1"
const axios = require("axios")


analyze = async (url, key) => {
    // the URL=`${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    analysis = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
        .then(function (response) {
            const { code } = response.data.status
            //handle errors
            if (code == 100) {
                const error = handleError(code, "please enter a valid URL")
                return error
            } else if (code == 212) {
                const error = handleError(code, response.data.status.msg)
                return error
            }
            // handle success
            const { score_tag, agreement, subjectivity, confidence, irony } = response.data
            let sample = {
                score_tag: score_tag,
                agreement: agreement,
                subjectivity: subjectivity,
                confidence: confidence,
                irony: irony
            }
            result = { sample, status: response.status }
            return result
        })
    return analysis
}

const handleError = (code, msg) => {
    const error = {
        code: code,
        msg: msg
    }
    return error
}

module.exports = {
    analyze
}