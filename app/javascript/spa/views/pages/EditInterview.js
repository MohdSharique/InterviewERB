import Utils from '../../services/Utils.js'

let udpateInterview = async (interview) => {
    const options = {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(interview),
      };
      try {
        const response = await fetch(`http://localhost:3000/interviews/`+interview.id, options);
        const json = await response.json();
        console.log(json)
        if(json.success){
            alert("Interview Updated");
        }
        else{
            alert("Interview not Updated");
        }
      } catch (err) {
        console.log(err);
      }

}

let getInterview = async (id) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    };
   try {
       const response = await fetch(`http://localhost:3000/interviews/${id}`, options)
       const json = await response.json();
       console.log(json); 
       return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
  }


// to add api support later
let EditInterview = {
    render : async () => {
        let id = (Utils.parseRequestURL()).id;
        let data = await getInterview(id);
        console.log(data);
        let iview = data.interview;
        
        let view =  /*html*/`
        <h1>Edit Interview</h1>
        <div class="container">
            <form id="edit_interview">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" value=${iview.title}>
                    
                <label for="start_time">Start time</label>
                <input type="datetime-local" name="start_time" id="start_time" value=${iview.start_time}>
                
                <label for="end_time">End time</label>
                <input type="datetime-local" name="end_time" id="end_time" value=${iview.end_time}>
            
                <button type="submit" name="submit" class="btn btn-primary">Submit</button>
            </form>         
        </div>
        `
        return view
    }
    , after_render: async () => {
        const form = document.getElementById('edit_interview');
        let id = (Utils.parseRequestURL()).id;

        form.addEventListener('submit', event => {
            event.preventDefault();
            let interview = {};
            Object.keys(form.elements).forEach(key => {
                let element = form.elements[key];
                if (element.type !== "submit") {
                    interview[element.name] = element.value;
                }
            });
            interview["id"] = id;
            
            udpateInterview(interview);
          })
    }

}
export default EditInterview;