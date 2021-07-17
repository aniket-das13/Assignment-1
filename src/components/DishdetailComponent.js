import React, {Component} from "react";
import Menu from "./MenuComponent";
import { Card, CardImg, CardText, CardBody,
    CardTitle, List} from 'reactstrap';

class Dishdetail extends Component{

    constructor(props){
        super(props);
    
        
    }

    
    renderComments(dish){
           
 
                    if(dish !=null){
        
                        return(  
                        
                            <div className="col-12 col-md-5 m-1 d-flex">
                        <Card>
                            <CardBody>
                              <h4>Comments</h4>
                              <CardText>
                                  {this.props.dish.comments.map((com)=>{
                    return(
                                <List type="unstyled" key={com.id}>
                                    <li>{com.comment}</li>
                                    <li>--{com.author}, {com.date}</li>
                                
                                </List>
                                
        
        
        
                    );
                
                })}
                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                        );
        
        
                    }
                    else return(<div></div>);
                }
        
        

        renderDish(dish) {
            if (dish != null)
                return(
                    <div className="row">
                <div className="col-12 col-md-5 m-1 ">
                
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name} />
                        <CardBody>
                          <CardTitle>{dish.name}</CardTitle>
                          <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>    
                   </div>
                   {this.renderComments(dish)}
                   </div>
                 
                   
                );
            else
                return(
                    <div></div>
                );
        }

        




    render(){
        
        
        return(
            

          this.renderDish(this.props.dish)
     
    
                



        
    );}

};

export default Dishdetail;
