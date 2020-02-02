const htmlRenderer = require("../lib/htmlRenderer")
const Manager = require("../lib/Manager")



describe("Render Html", () => { //describe what i wanna test
    const gerente = new Manager ("Lucas", 17, "dont@me.com", 15) //give dummie data

    test("test html gen", ()=>{
        expect(htmlRenderer.renderManager(gerente)).toEqual(   
`<div class="card employee-card">
<div class="card-header">
<h2 class="card-title">Lucas</h2> <!--handlebars take js data and place it into html-->
<h3 class="card-title"></i>Manager</h3>
</div>
<div class="card-body">
<ul class="list-group">
<li class="list-group-item">ID: 17</li>
<li class="list-group-item">Email: <a href="mailto:dont@me.com">dont@me.com</a></li>
<li class="list-group-item">Office number: 15</li>
</ul>
</div>
</div>`
        )
    })
});

