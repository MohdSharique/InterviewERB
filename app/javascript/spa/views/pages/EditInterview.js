// to add api support later
let EditInterview = {
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
    }

}
export default EditInterview;