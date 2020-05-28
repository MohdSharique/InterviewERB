let getParticipantList = async() => {
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/participants`, options)
        const json = await response.json();
        return json;
    } catch(err) {
        console.log('Error getting documents', err)
    }
}


let Participants = {
    render : async() => {
        let participants = await getParticipantList();
        let view = /*html*/`
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Time</th>
            <th>End Time </th>
          </tr>
        </thead>
    
        <tbody>
        ${ participants.map(interview =>
            /*html*/`
            <tr>
                <td> ${participant.title} </td>
                <td> ${participant.start_time} </td>
                <td> ${participant.end_time} </td>
                <td><a href="#">Show</a></td>
                <td><a href="#">Edit</a></td>
                <td><a href="#">Destroy</a></td>
            </tr>
            `)
        }
        </tbody>
      </table>
   `
    },
    after_render: async () => {}
}

export default Participants;
    ;