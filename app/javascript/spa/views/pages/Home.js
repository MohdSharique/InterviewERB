// Displays all interviews created so far (like in ERB version)
// will add links to show/edit/destroy later

let getInterviewList = async() => {
    const options = {
        method: 'GET',
        header: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`http://localhost:3000/home`, options)
        const json = await response.json();
        console.log(json)
        return json;
    } catch(err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async() => {
        let interviews = await getInterviewList();
        console.log(interviews)
        let view = /*html*/`
        <h1> Interview List </h1>
        <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Start Time</th>
            <th>End Time </th>
          </tr>
        </thead>
    
        <tbody>
        ${ interviews.map(interview =>
            /*html*/`
            <tr>
                <td> ${interview.title} </td>
                <td> ${interview.start_time} </td>
                <td> ${interview.end_time} </td>
                <td><a href="#/interviews/${interview.id}/show" onclick = "window.location.href='#/interviews/${interview.id}/show'">Show</a></td>
                <td><a href="#/interviews/${interview.id}/edit">Edit</a></td>
                <td><a href="#">Destroy</a></td>
            </tr>
            `)
        }
        </tbody>
      </table>
   `
    return view;
    },
    after_render: async () => {}
}

export default Home;