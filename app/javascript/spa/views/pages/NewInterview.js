// to add api support later

let createInterview = async (interview) => {
    let data = {
        title: interview.title,
        start_time: interview.start_time, 
        end_time: interview.end_time
    };
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews`, options);
        const json = await response.json();
        console.log(json);
        if(json.success){
            alert("Interview Created");
        }
        else{
            alert("Interview not Created");
        }
      } catch (err) {
        console.log(err);
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
        
        form.addEventListener('submit', event =>  {
            event.preventDefault();
            let interview = {};
            
            Object.keys(form.elements).forEach(key => {
                let element = form.elements[key];
                // console.log(element);
                if (element.type !== "submit") {
                    console.log(element.value);
                    interview[element.id] = element.value;
                }
              });
            
            createInterview(interview);
        })
    }

}
export default NewInterview;