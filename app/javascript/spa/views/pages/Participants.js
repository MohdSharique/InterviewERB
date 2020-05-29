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
        console.log(json);
        return json;
    } catch(err) {
        console.log('Error getting documents', err)
    }
}


let Participants = {
    render : async() => {
        let participants = await getParticipantList();
        console.log(participants);
        let view = /*html*/`
        <h1> Participants </h1>
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
                <td><a href="#">Show</a></td>
                <td><a href="#">Edit</a></td>
                <td><a href="#">Destroy</a></td>
            </tr>
            `)
        }
        </tbody>
      </table>
    `
    return view
    },
    after_render: async () => {}
}

export default Participants;
    ;