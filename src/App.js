import React from 'react';
import {PricingTable, PricingSlot, PricingDetail} from 'react-pricing-table';
import cloudPlans from './datapricingtable';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.tooltipRef = React.createRef();
  }

  render() {
   
    return (
<PricingTable  highlightColor='#1976D2'>
    <PricingSlot  onClick={this.submit} buttonText={cloudPlans[0].tag} title={cloudPlans[0].plan} priceText={cloudPlans[0].price} >
        <PricingDetail className="text"> {cloudPlans[0].text}</PricingDetail>
        <PricingDetail> &#10003;{cloudPlans[0].storage}</PricingDetail>
        <PricingDetail> &#10003;{cloudPlans[0].dataTransfer}</PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[0].panel} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[0].support} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[0].themes} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[0].others} </PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText={cloudPlans[1].tag} title={cloudPlans[1].plan} priceText={cloudPlans[1].price} >
        <PricingDetail className="text"> {cloudPlans[1].text}</PricingDetail>
        <PricingDetail> &#10003;{cloudPlans[1].storage}</PricingDetail>
        <PricingDetail>&#10003; {cloudPlans[1].dataTransfer}</PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[1].panel} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[1].support} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[1].themes} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[1].others} </PricingDetail>
    </PricingSlot>
    <PricingSlot  onClick={this.submit} buttonText={cloudPlans[2].tag} title={cloudPlans[2].plan} priceText={cloudPlans[2].price} >
        <PricingDetail className="text">  {cloudPlans[2].text}</PricingDetail>
        <PricingDetail> &#10003;{cloudPlans[2].storage}</PricingDetail>
        <PricingDetail> &#10003;{cloudPlans[2].dataTransfer}</PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[2].panel} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[2].support} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[2].themes} </PricingDetail>
        <PricingDetail >&#10003;{cloudPlans[2].others} </PricingDetail>
    </PricingSlot>
   
</PricingTable>
    );
  }
}