const parent = React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{},"I'm an h1 tag")
,React.createElement("h2",{},"I'm an h2 tag"),React.createElement("h3",{},"I'm an h3 tag")])); 


        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);