import React, { Component } from 'react';
import Card from '../../assest/img/cards.png'
import './Cardstats.css';
import cardImg from '../../assest/img/card-i.png';
import Carditem from './Carditem';

export default class Cardstats extends Component {


    constructor(props){
        super(props);
        this.state={
            cards: [],
            isLoad: "false"
        }
    }


    // handleData = (obj) => {
    //     var cardData = [];
    //     cardData = obj;
    // }




    render() {

    const cards = [this.props.cards];
    // const obj = JSON.stringify(cards)
    // console.log(obj)
    // var cardData = [];
    // const data = (obj) => {
    //     cardData = obj;
    //    return (cardData[1].name)
    // }

    // console.log(this.handleData(obj))

   
   
        
    

        return (
            <div>
              {/* {handleProps} */}
                <div className="container player-stats">
                    <div className="row">
                                        <div className="col-12 p-2">
                                            <div className="container-header d-flex">
                                                        <div className="headertitle">
                                                            <img
                                                                src={Card}
                                                                alt="Cards-icon"
                                                                className="header-icon"
                                                            />
                                                            <span className="title-name">Cards Stats</span>
                                                        </div>
                                                        <div class="dropdown cardCategory" >
                                                            <span class="dropdown-toggle category-text" data-toggle="dropdown">All Cards</span>
                                                                <div class="dropdown-menu ml-1">
                                                                    <span class="dropdown-item text-center">All Cards</span>
                                                                    <span class="dropdown-item text-center">By Elixer</span>
                                                                    <span class="dropdown-item text-center">By Rearity</span>
                                                                    <hr/>
                                                                    <span class="dropdown-item text-center">Deck</span>
                                                                </div>
                                                        </div>
                                            </div>
                                        </div>

                                        <span className="divider"></span>

                                      
                                         

                                
                                
                                
                                      {/* <div className="col-lg-12 d-flex"> */}


                                                       
                          {
                             cards.map((item,index) => {
                                
                                //  console.log('item', item)
                                 var data = [Object.assign({}, item)];

                                 //  console.log(data[0])
                                 
                                 data.map((item,index) => {
                                    var cardData = Object.assign({}, item[index])

                                    console.log(cardData.icon)
                                    // var {icon,name,level,elixir} = [card.icon,card.level,card.name,card.elixir]

                                    //  var cardData = Object.assign({}, item[index])
                                    //  console.log(cardData.name)
                                    //  index+=1;
                                    //    return(
                                    //      <div className="col-lg-12 d-flex">
                                    //         <Carditem 
                                    //             icon={cardData.icon}
                                    //             level = {cardData.level}
                                    //             name={cardData.name}
                                    //             elixer={cardData.elixir}
                                    //              />
                                    //     </div>
                                    //     );
                                    index+=1;
                                 })
                                 index+=1;
                                
                               
                             }) 
                          }


{/* <br></br>
                                              <Carditem 
                                                icon={cardImg}
                                                level = "13"
                                                name="Goblin"
                                                elixer="3 "
                                                 />  */}
                                               
                                               {/* </div> */}
                                             
                                             
                                            

                                            {/* <div className="card-holder d-block">
                                                <img 
                                                    src={cardImg}
                                                    alt="Card-img"
                                                    className="card-image"
                                                />
                                                <span className="d-block text-center image-title">Goblin</span>
                                            </div> */}
                                            
                                     


                    </div>
                </div>
            </div>
        )
    }
}




