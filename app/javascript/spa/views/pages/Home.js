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
        const response = await fetch(`interview-url`, options)
        const json = await response.json();
        return json;
    } catch(err) {
        console.log('Error getting documents', err)
    }
}

let Home = {
    render : async() => {
        let interviews = await getInterviewList();
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
        ${ interviews.map(interview =>
            /*html*/`
            <tr>
                <td> ${interview.title} </td>
                <td> ${interview.start_time} </td>
                <td> ${interview.end_time} </td>
                <td><a href="#">Show</a></td>
                <td><a href="#">Edit</a></td>
                <td><a href="#">Destroy</a></td>
            </tr>
            `)
        }
        </tbody>
      </table>
        `
    }
}

export default Home;