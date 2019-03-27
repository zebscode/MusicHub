import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'; 
import { update_listing_id } from '../../redux/reducer'

class ProductView extends Component {
    constructor(props){
        super(props)
        this.state = {
            listing_id: [{
                description: "", 
                email: "", 
                listing_id: "",
                listing_name: "",
                price: "",
                profile_name: "",
                sold: false,
                tags: "",
                time_stamp: "",
                type: "",
                user_id: ""
             }]
        }
    }

    // Need SQL file to get listing by ID# 
    // Deconstruct everything we need from the listing and place them in the appropriate divs 
     
    componentDidMount(){
        console.log("PROPS", this.props)
        this.fetchListingID()
    }

    fetchListingID = () => {
        axios.get(`/api/listings/${this.props.match.params.listing_id}`).then(response => {
            console.log("fetchListingID", response)
            this.props.update_listing_id(response.data)
            this.setState({
                listing_id: response.data
            })
            console.log("listing_id", response.data, "DESCRIPTION", this.state)
        }) 
    }

    render(){
        console.log(this.state.listing_id[0])
        
        return(

            <div className="productView">

                <div className="productView__images">
                    {/* {this.state} */}
                    IMAGES
                </div>

                <div className="productView__descriptionAndUserInfo">

                    <div className="productView__description">
                    {this.state.listing_id.description}
                    {this.state.listing_id[0].description}
                        
                    </div>

                    <div className="productView__userInfo">
                    {this.state.listing_id[0].profile_name}
                        USER INFO 
                    </div>
                
                </div>

                <div className="productView__googleMaps">
                    GOOGLE MAPS
                </div>

                <div className="productView__similarOfferings">
                    SIMILAR OFFERINGS

                    <div className='productView__similarDisplay'>
                        SIMILAR PRODUCTS
                    </div>

                </div>
                
            </div> 
        )
    }
}

const mapStateToProps = (reducerState) => {
    return {
        listing_id: reducerState.listing_id
    }
}

export default connect (mapStateToProps, { update_listing_id })(ProductView);