import Utils from '../../services/Utils.js'

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
       console.log(json)
       return json
   } catch (err) {
       console.log('Error getting documents', err)
   }
}

let createParticipant = async (participant) => {
    let data = {
        email: participant.email,
        role: participant.role
    };
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };
      try {
        const response = await fetch(`http://localhost:3000/participants`, options);
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

let ShowInterview = {
    render : async() => {
        let id = (Utils.parseRequestURL()).id;
        let data = await getInterview(id);
        let interview = data.interview;
        let participants = data.participants;
        console.log(interview)
        let view = /*html*/`
        <h1> Interview </h1>
        <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Start Time</th>
                <th>End Time </th>
            </tr>
            </thead>
        
            <tbody>
            <tr>
                <td> ${interview.title} </td>
                <td> ${interview.start_time} </td>
                <td> ${interview.end_time} </td>
            </tr>
            </tbody>
        </table>
        <table>
        <thead>
          <tr>
            <th>Participant</th>
            <th>Role</th>
          </tr>
        </thead>
    
        <tbody>
        ${ participants.map(participant =>
            /*html*/`
            <tr>
                <td> ${participant.email} </td>
                <td> ${participant.role} </td>
                <td><a href="#">Remove</a></td>
            </tr>
            `)
        }
        </tbody>

        <h1>Add Paticipant</h1>
        <form id="new_participant">
            <label for="email">Email</label>
            <input type="text" name="email" id="email">
                
            <label for="role">Role</label>
            <input type="text" name="role" id="role">

            <button type="submit" name="submit" class="btn btn-primary">Submit</button>
        </form> 
        `
    return view;
    },
    after_render: async () => {
        const form = document.getElementById("new_participant");
        
        form.addEventListener('submit', event =>  {
            event.preventDefault();
            let participant = {};
            
            Object.keys(form.elements).forEach(key => {
                let element = form.elements[key];
                // console.log(element);
                if (element.type !== "submit") {
                    console.log(element.value);
                    participant[element.id] = element.value;
                }
              });
            
              createParticipant(participant);
        })
    }
}

export default ShowInterview;