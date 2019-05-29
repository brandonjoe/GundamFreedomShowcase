import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
const photos = [
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46731547_2198765423695176_2053042393812303872_n.jpg?_nc_cat=108&_nc_oc=AQm74XY7v0er09ho7BAJlaEGWVjAHIOqLv5CMR5S3FxGSvKmN-F34BzXbQPZrQAkhlo&_nc_ht=scontent-lax3-2.xx&oh=b878ffa5a5adc3f315531c2f4a698309&oe=5D900CE9', width: 4, height: 3 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46634203_2198766863695032_8520950875991048192_n.jpg?_nc_cat=100&_nc_oc=AQkX_9jmLPRQFiGOtYCDqXdEFSbfNPs9mU8f2dUs-CMjbe9M4eJXU2za2jLz06t2Fis&_nc_ht=scontent-lax3-2.xx&oh=9e96f9ae5ef48b9f14a2076c809310eb&oe=5D9AF4DE', width: 2, height: 1 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46728373_2198793587025693_7923825300859781120_n.jpg?_nc_cat=103&_nc_oc=AQlwvUHHMyqPgO5TU9rGm4otMQj5xzcyQyz_1gjt_aP22AYK6RGCg-OhEIYZBYQpmK8&_nc_ht=scontent-lax3-2.xx&oh=071d59e4f305e1feaeaf9a1c798e01dc&oe=5D8EF37F', width: 4, height: 4 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46860443_2198766817028370_8256508893467770880_n.jpg?_nc_cat=107&_nc_oc=AQmEobqnCiAzkLK71juYzmfybDuVnVz6n2CJXJ9ws95iG_yePur87vsk4ga-tqSKLWI&_nc_ht=scontent-lax3-2.xx&oh=32a7ee04e1fb096f3e96ce3de40de5fc&oe=5D57267D', width: 3, height: 4 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46742233_2198765397028512_3043426461739384832_n.jpg?_nc_cat=101&_nc_oc=AQmvMuFxh2mRb2byiwZVS4YRXZNCBAUeKnbC16nFOsK4BHMr1Y9z6bHDj5Grn0cfAcY&_nc_ht=scontent-lax3-2.xx&oh=23c6548118902424930b5e3ab3cf1544&oe=5D594E3E', width: 3, height: 4 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46623697_2198793553692363_4299292680254390272_n.jpg?_nc_cat=111&_nc_oc=AQngHx9VQYUeH_5t00LoeaFcqfOSBvE4WedWHAybmQ1aunMDi4ad9oCGngp2oVLT9_w&_nc_ht=scontent-lax3-2.xx&oh=8c583e16ff069cfc593453c3add1c238&oe=5D964FED', width: 4, height: 3 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46742239_2198793643692354_2406970994905317376_n.jpg?_nc_cat=104&_nc_oc=AQmUle9Cu6B_Kka2H101Ic861vupgJAFr1-3-nqCBy43RaclS9LDFDBi7PCIZ-NRY8I&_nc_ht=scontent-lax3-2.xx&oh=10739b3ac2246f0f3e1a2c18e26976b2&oe=5D8FE922', width: 3, height: 4 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46789522_2198764107028641_3010342972903391232_o.jpg?_nc_cat=101&_nc_oc=AQmhe300FlknH5qgJGpzVSEy1qOkfubKEPZzkpGfCdDLwBfooSkJEiSovBMjJVuKQkw&_nc_ht=scontent-lax3-2.xx&oh=c13e0ca52c44754d4ab2ece83396c076&oe=5D9D8929', width: 4, height: 3 },
    { src: 'https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/46968804_2198793673692351_4007107605590704128_n.jpg?_nc_cat=110&_nc_oc=AQnecKoJMgQmzi4OOj2xaKfQfzVeMhJ9rfGvlwGpmAddQgoUsP6WEtK1BjRe5ERYH1A&_nc_ht=scontent-lax3-2.xx&oh=29cfb6d7eca7f676efb46dbc04bbd1c6&oe=5D906B47', width: 4, height: 5 }
  ];
class Gal extends Component {
    constructor() {
        super();
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
      }
      openLightbox(event, obj) {
        this.setState({
          currentImage: obj.index,
          lightboxIsOpen: true,
        });
      }
      closeLightbox() {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        });
      }
      gotoPrevious() {
        this.setState({
          currentImage: this.state.currentImage - 1,
        });
      }
      gotoNext() {
        this.setState({
          currentImage: this.state.currentImage + 1,
        });
      }
    render() {
        return (
            
        <div>
        <Gallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
  
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
        );
    }
}

export default Gal;