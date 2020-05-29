let Navbar = {
    render: async () => {
        let view =  /*html*/`
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div class="container">
          <a class="navbar-brand" href="#">Interview Creation App</a>
          <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarResponsive" style="">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" onclick = "window.location.href= '/#/'">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onclick = "window.location.href= '/#/new_interview'"> New Interview</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" onclick = "window.location.href= '/#/participants'">Participants</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        `
        return view
    },
    after_render: async () => { }
}

export default Navbar;