import React, { Component }from 'react';
import axios from 'axios';
import Brand from '../components/Brand';
import "./BrandList.css";

class BrandList extends Component{
  state = {
    isLodaing: true,
    brandList:[]
    }
  getData= async () => {
    try {
      const data = await axios.get('dummy.json');
      this.setState({ data, isLoading: false });
      console.log('dadad' + data);
    }
    catch (error) {
      console.log(error);
    }
  }
  componentDidMount() {
    // this.getData();
    fetch('dummy.json')
      .then(function (result) {
        return result.json();
      })
      .then(function (json) {
        console.log(json);
        this.setState({ isLoading: false, brandList: json});
      }.bind(this));
  }
  render() {
    const { isLoading, brandList } = this.state;
    return (
      <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="brand__list">
          <span>브랜드 소개하는 페이지</span>
            {brandList.map(brand => (
              <Brand
                key={JSON.stringify(brand.id)}
                id={JSON.stringify(brand.id)}
                name={JSON.stringify(brand.name)}
                desc={JSON.stringify(brand.desc)}
                homepage={JSON.stringify(brand.homepage)}
                image={JSON.stringify(brand.image)}
              />
            ))}
        </div>
        )}
    </section>
    );
  }
} 

export default BrandList;
