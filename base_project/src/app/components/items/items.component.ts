import { Component, OnInit } from '@angular/core';

// Needed for changing styles via css
import { ViewEncapsulation } from '@angular/core'

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  // #1 Striped top
  actual1:String
  stripedTop:Array<String>
  // #2 Hearts pants
  actual2:String
  heartsPants:Array<String>
  // #3 Side heart dress
  actual3:String
  heartDress:Array<String>
  // #4 Fur coat
  actual4:String
  furCoat:Array<String>
  // #5 Crop top
  actual5:String
  cropTop:Array<String>
  // #6 Leather top
  actual6:String
  leatherTop:Array<String>
  // #7 Bicolor sweatshirt
  actual7:String
  bicolor:Array<String>
  // #8 Neoprene muscles
  actual8:String
  neoprene:Array<String>

  constructor() {
    // #1 Striped top
    this.stripedTop = ["blueHeartTop","limeHeartTop","pinkHeartTop"].map((n) => `/assets/images/items/heart-top/${n}.jpg`);
    this.actual1 = this.stripedTop[0]
    // #2 Hearts pants
    this.heartsPants = ["pantalonAmarillo","pantalonAzul","pantalonLima","pantalonNegro","pantalonRosa"].map((n) => `/assets/images/items/pants/${n}.jpg`);
    this.actual2 = this.heartsPants[0]
    // #3 Side heart dress
    this.heartDress = ["limeSideHeart","blueSideHeart","pinkSideHeart"].map((n) => `/assets/images/items/side-heart-dress/${n}.jpg`);
    this.actual3 = this.heartDress[0]
    // #4 Fur coat
    this.furCoat = ["pinkFurCoat","whiteFurCoat"].map((n) => `/assets/images/items/fur-hearts-coat/${n}.jpg`);
    this.actual4 = this.furCoat[0]
    // #5 Crop top
    this.cropTop = ["blackCropTop","limeCropTop","pinkCropTop"].map((n) => `/assets/images/items/crop-top/${n}.jpg`);
    this.actual5 = this.cropTop[0]
    // #6 Leather top
    this.leatherTop = ["pinkLeatherTop","purpleLeatherTop","blueLeatherTop"].map((n) => `/assets/images/items/leather-top/${n}.jpg`);
    this.actual6 = this.leatherTop[0]
    // #7 Bicolor sweatshirt
    this.bicolor = ["whiteBicolorSweatshirt","pinkBicolorSweatshirt","blueBicolorSweatshirt"].map((n) => `/assets/images/items/bicolor-sweatshirt/${n}.jpg`);
    this.actual7 = this.bicolor[0]
    // #8 Neoprene muscles
    this.neoprene = ["tulleMuscles","greenMuscles"].map((n) => `/assets/images/items/neoprene-body/${n}.jpg`);
    this.actual8 = this.neoprene[0]
  }

  ngOnInit(): void {
  }

  striped(num:number){
    this.actual1 = this.stripedTop[num]
  }

  pants(num:number){
    this.actual2 = this.heartsPants[num]
  }

  dress(num:number){
    this.actual3 = this.heartDress[num]
  }


  coat(num:number){
    this.actual4 = this.furCoat[num]
  }

  crop(num:number){
    this.actual5 = this.cropTop[num]
  }

  leather(num:number){
    this.actual6 = this.leatherTop[num]
  }

  sweat(num:number){
    this.actual7 = this.bicolor[num]
  }

  neop(num:number){
    this.actual8 = this.neoprene[num]
  }

}
