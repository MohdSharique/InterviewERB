// to add api support later

let getInterviewList = async() => {
    const options = {
        method: 'POST',
        header: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/interviews/new`, options)
        const json = await response.json();
        console.log("champ")
        return json;
    } catch(err) {
        console.log('Error getting documents', err)
    }
}

let NewInterview = {
    render : async () => {
        let view =  /*html*/`
        <h1>New Interview</h1>
        <div class="container">
            <form id="new_interview">
                <label for="title">Title</label>
                <input type="text" name="title" id="title">
                    
                <label for="start_time">Start time</label>
                <input type="datetime-local" name="start_time" id="start_time">
                
                <label for="end_time">End time</label>
                <input type="datetime-local" name="end_time" id="end_time">
            
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
            </form>         
        </div>
        `
        return view
    }
    , after_render: async () => {
        const form = document.getElementById("new_interview");
        console.log(Object.keys(form.elements));
        // form.addEventListener('submit', event =>  {
        //     event.preventDefault();
            
        // })
    }

}
export default NewInterview;