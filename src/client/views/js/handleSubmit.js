import axios from "axios";

const handleSubmit = async (e) => {
    e.preventDefault()
    const form = document.querySelector("form")
    const { data } = await axios.post(
        'http://localhost:8000/',
        form,
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )

    show_result(data)

}

const show_result = data => {
    if (data.msg) {
        document.getElementById("error").style.display = "block";
        document.querySelectorAll("ul li").forEach(element => {
            element.style.display = "none"
        })
        document.getElementById("error").innerHTML = `${data.msg}`;
        
        return ;
    }
    document.getElementById("error").style.display = "none";
    document.querySelectorAll("ul li").forEach(element => {
        element.style.display = "block"
    })
    document.getElementById("agreement").innerHTML = `Agreement: ${data.sample.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.sample.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.sample.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.sample.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.sample.score_tag}`;
}

export { handleSubmit }



