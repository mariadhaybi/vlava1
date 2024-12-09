fetch('http://localhost:3000/services')
      .then(response => response.json())
      .then(data=> {
        let services=document.getElementById('services');
    data.forEach(svc=> {
        let e=document.createElement('div');
        let content =
       `<div class="col-md-6 icon-box position-relative">
                <i class="${svc.icon}"></i>
                <h4><a href="" class="stretched-link">${svc.title}</a></h4>
                <p>${svc.text}</p>
              </div><!-- Icon-Box -->`
        e.innerHTML=content;
        services.appendChild(e);
    });
      })