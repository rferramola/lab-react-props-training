function BoxColor({r,g,b}){
    const color =  {
        backgroundColor: `rgb(${r},${g},${b})`,
        height:  "100px",
        width: "600px",
        
        
    }
    return(
        <div style={color}>rgb({r},{g},{b})</div>
    );
}

export default BoxColor;