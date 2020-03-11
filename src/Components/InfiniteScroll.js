import React, {Component, Fragment} from 'react';
import { connect } from "react-redux";
import { getPeopleData, getPeopleDataFromState } from '../Actions/actions';
import BottomScrollListener from 'react-bottom-scroll-listener'

class userDetails extends Component{
    constructor(props){
        super(props)
    }   
    UNSAFE_componentWillMount(){
        let i=0;
        for(i=0;i<10;i=i+1){
        console.log("iniside component will mount")
        this.props.getPeopleData()
        }
    } 

    getData(){
        let i=0;
        for(i=0;i<10;i=i+1){
        console.log("iniside component will mount")
        this.props.getPeopleData()
        }

    }

    componentDidUpdate(){
        
        console.log("iniside component did update")
        this.props.getPeopleDataFromState()
    }
    render(){
        console.log(this.props.data)
        return(
            <Fragment>
                <BottomScrollListener onBottom={()=>this.getData()} >
                <ul className="container">
                {
                    this.props.data.map((user,index)=>{
                        return(
                            <div className="user-info">
                            <li key={index}>{user.firstName} {user.lastName} </li>
                            <p>{user.cell}</p>
                            <div className="seperator"></div>
                            </div>
                        )
                    })
                }
                </ul>
                </BottomScrollListener>
            </Fragment>
        )
    }

}

function mapStateToProps(state){
    return {data: state.userInfo}
}

const InfiniteScroll = connect(mapStateToProps,{getPeopleData,getPeopleDataFromState})(userDetails);

export default InfiniteScroll;

