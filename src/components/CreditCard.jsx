import visaImg from "../assets/images/visa.png"
import masterCardImg from "../assets/images/master-card.svg"
import "./CreditCard.css"


function CreditCard({type, number, expirationMonth, expirationYear, bank, owner, bgColor, color}){
    let cardNumber = "";

function hideNumber(number){
    for (let index = 0; index < number.length; index++) {
        if(index < 12){
            cardNumber += "."
        }else{
            cardNumber += number[index];
        }
    }
return cardNumber;
}

    const backColor = {
        backgroundColor: bgColor,
    }
    let src;
   if(type === "Visa"){
    src = visaImg;
    }else{
    src = masterCardImg;
   }
    return(
        <div  style={backColor} className="credit-card-container">
            <img className="logo" src={src}/>
            <div className="data-card">
                <p className="number-card">{hideNumber(number)}</p>
                <p className="expiration-date">{expirationMonth}/{expirationYear} {bank}</p>
                <p className="owner-name">{owner}</p>
                
            </div>
        </div>
    )
}

export default CreditCard;