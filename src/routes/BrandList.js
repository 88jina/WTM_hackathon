import React, { Component }from 'react';
// import axios from 'axios';
import Brand from '../components/Brand';
import "./BrandList.css";

class BrandList extends Component{
  state = {
    isLodaing: true,
    brandList:[]
    }
  // getData= async () => {
  //   try {
  //     const result = await axios.get('dummy.json');
  //     this.setState({ brandList:result, isLoading: false });
  //     console.log('data :'+ result);
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }
  componentDidMount() {
    // this.getData();
    fetch('dummy.json')
      .then(function (result) {
        return result.json();
      })
      .then(function (result) {
        console.log("result :", result);
        this.setState({ isLoading: false, brandList:result});
      }.bind(this));
  }
  render() {
    const { isLoading, brandList } = this.state;
    return (
      <section className="brand__container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="brand__list">
              {brandList.map(result => (
                <Brand
                  key={result.id}
                  name={result.name}
                  description={result.description}
                  homepage={result.homepage}
                />
              ))}
        </div>
        )}
    </section>
    );
  }
} 

export default BrandList;
