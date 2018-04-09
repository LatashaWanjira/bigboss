import { Component, OnInit } from '@angular/core';
import { Image } from '../image'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  images = [
    new Image(1, "http://image.ibb.co/b3RcVn/sh383964.jpg"),
    new Image(12, "http://image.ibb.co/b3RcVn/sh383964.jpg"),
    new Image(12, "http://image.ibb.co/gZfRO7/sh383945.jpg"),
    new Image(12, "http://image.ibb.co/cjFhwS/sh383931.jpg"),
    new Image(12, "http://image.ibb.co/jn54An/sh383938.jpg"),
    new Image(12, "http://image.ibb.co/j1yPAn/sh383922.jpg"),
    new Image(12, "http://image.ibb.co/m3tD37/sh383902.jpg"),
    new Image(12, "http://image.ibb.co/bCkAi7/sh383912.jpg"),
    new Image(12, "http://image.ibb.co/dHSqi7/sh383897.jpg"),
    new Image(12, "http://image.ibb.co/idFzbS/sh383888.jpg"),
    new Image(12, "http://image.ibb.co/fPzQGS/sh383882.jpg"),
    new Image(12, "http://image.ibb.co/c2qnVn/sh383877.jpg"),
    new Image(12, "http://image.ibb.co/hdzEAn/sh383868.jpg"),
    new Image(12, "http://image.ibb.co/hjAbO7/sh383853.jpg"),
    new Image(12, "http://image.ibb.co/hpnO37/sh383836.jpg"),
    new Image(12, "http://image.ibb.co/igFXwS/sh383829.jpg"),
    new Image(12, "http://image.ibb.co/kNfXwS/sh383815.jpg"),
    new Image(12, "http://image.ibb.co/kf0XwS/sh383801.jpg"),
    new Image(12, "http://image.ibb.co/k8nCwS/sh383799.jpg"),
    new Image(12, "http://image.ibb.co/dOOKbS/sh383781.jpg"),
    new Image(12, "http://image.ibb.co/niOKbS/sh383776.jpg"),
    new Image(12, "http://image.ibb.co/iTAMqn/sh383761.jpg"),
    new Image(12, "http://image.ibb.co/hdXebS/sh383747.jpg"),
    new Image(12, "http://image.ibb.co/gMY7Vn/sh383758.jpg"),
    new Image(12, "http://image.ibb.co/js1uAn/sh383733.jpg"),
    new Image(12, "http://image.ibb.co/bFDVi7/sh383738.jpg"),
    new Image(12, "http://image.ibb.co/mgVMqn/sh383720.jpg"),
    new Image(12, "http://image.ibb.co/n6cebS/sh383710.jpg"),
    new Image(12, "http://image.ibb.co/dBtKbS/sh383703.jpg"),
    new Image(12, "http://image.ibb.co/jB9337/sh383684.jpg"),
    new Image(12, "http://image.ibb.co/ffK337/sh383697.jpg"),
    new Image(12, "http://image.ibb.co/jOiVi7/sh383666.jpg"),
    new Image(12, "http://image.ibb.co/dw9337/sh383652.jpg"),
    new Image(12, "http://image.ibb.co/if1SVn/sh383650.jpg"),
    new Image(12, "http://image.ibb.co/fDeswS/sh383645.jpg"),
    new Image(12, "http://image.ibb.co/g571qn/sh383598.jpg"),
    new Image(12, "http://image.ibb.co/e1tKbS/sh383629.jpg"),
    new Image(12, "http://image.ibb.co/cndkGS/sh383608.jpg"),
    new Image(12, "http://image.ibb.co/hz37Vn/sh383589.jpg"),
    new Image(12, "http://image.ibb.co/iNO7Vn/sh383581.jpg"),
    new Image(12, "http://image.ibb.co/guEEAn/sh383573.jpg"),
    new Image(12, "http://image.ibb.co/nBnqi7/sh383563.jpg"),
    new Image(12, "http://image.ibb.co/fpLFGS/sh383550.jpg"),
    new Image(12, "http://image.ibb.co/b5o2wS/sh383539.jpg"),
    new Image(12, "http://image.ibb.co/k3Orqn/sh383518.jpg"),
    new Image(12, "http://image.ibb.co/mwr0i7/sh383508.jpg"),
    new Image(12, "http://image.ibb.co/fkhUbS/sh383504.jpg"),
    new Image(12, "http://image.ibb.co/hmYfi7/sh383492.jpg"),
    new Image(12, "http://image.ibb.co/hPMBqn/sh383477.jpg"),
    new Image(12, "http://image.ibb.co/k6c6O7/sh383468.jpg"),
    new Image(12, "http://image.ibb.co/iG32wS/sh383460.jpg"),
    new Image(12, "http://image.ibb.co/jurY37/sh383451.jpg"),
    new Image(12, "http://image.ibb.co/nMQFGS/sh383444.jpg"),
    new Image(12, "http://image.ibb.co/e5HjAn/sh383435.jpg"),
    new Image(12, "http://image.ibb.co/gjy2wS/sh383423.jpg"),
    new Image(12, "http://image.ibb.co/dr8fi7/sh383410.jpg"),
    new Image(12, "http://image.ibb.co/ho1cVn/sh383397.jpg"),
    new Image(12, "http://image.ibb.co/cE1pbS/sh383388.jpg"),
    new Image(12, "http://image.ibb.co/kJpaGS/sh383366.jpg"),
    new Image(12, "http://image.ibb.co/no5FGS/sh383356.jpg"),
    new Image(12, "http://image.ibb.co/cV8PAn/sh383343.jpg"),
    new Image(12, "http://image.ibb.co/cq10i7/sh383337.jpg"),
    new Image(12, "http://image.ibb.co/b3xvGS/sh383321.jpg"),
    new Image(12, "http://image.ibb.co/cJofi7/sh383315.jpg"),
    new Image(12, "http://image.ibb.co/jqgY37/sh383303.jpg"),
    new Image(12, "http://image.ibb.co/mKcjAn/sh383299.jpg"),
    new Image(12, "http://image.ibb.co/ksBY37/sh383291.jpg"),
    new Image(12, "http://image.ibb.co/fqemO7/sh383282.jpg"),
    new Image(12, "http://image.ibb.co/kfXUbS/sh383274.jpg"),
    new Image(12, "http://image.ibb.co/bME9bS/sh383257.jpg"),
    new Image(12, "http://image.ibb.co/iUhHVn/sh383266.jpg"),
    new Image(12, "http://image.ibb.co/cjJPAn/sh383245.jpg"),
    new Image(12, "http://image.ibb.co/dsCUbS/sh383227.jpg"),
    new Image(12, "http://image.ibb.co/kQ8PAn/sh383240.jpg"),
    new Image(12, "http://image.ibb.co/hmwcVn/sh383216.jpg"),
    new Image(12, "http://image.ibb.co/em9aGS/sh383195.jpg"),
    new Image(12, "http://image.ibb.co/kYnjAn/sh283185.jpg"),
    new Image(12, "http://image.ibb.co/ioLXwS/sh283173.jpg"),
    new Image(12, "http://image.ibb.co/idKgqn/sh283168.jpg"),
    new Image(12, "http://image.ibb.co/e1UQGS/sh283161.jpg"),
    new Image(12, "http://image.ibb.co/gtNO37/sh283149.jpg"),
    new Image(12, "http://image.ibb.co/fyjQGS/sh283146.jpg"),
    new Image(12, "http://image.ibb.co/h7NCwS/sh283139.jpg"),
    new Image(12, "http://image.ibb.co/n4RGO7/sh283114.jpg"),
    new Image(12, "http://image.ibb.co/fri7Vn/sh283100.jpg"),
    new Image(12, "http://image.ibb.co/iHjEAn/sh283089.jpg"),
    new Image(12, "http://image.ibb.co/konCwS/sh283075.jpg"),
    new Image(12, "http://image.ibb.co/d2ri37/sh283070.jpg"),
    new Image(12, "http://image.ibb.co/hphqi7/sh283059.jpg"),
    new Image(12, "http://image.ibb.co/c2fbO7/sh283051.jpg"),
    new Image(12, "http://image.ibb.co/bMgGO7/sh283045.jpg"),
    new Image(12, "http://image.ibb.co/fArGO7/sh283032.jpg"),
    new Image(12, "http://image.ibb.co/iavzbS/sh283038.jpg"),
    new Image(12, "http://image.ibb.co/evwuAn/sh283022.jpg"),
    new Image(12, "http://image.ibb.co/chDwO7/sh283012.jpg"),
    new Image(12, "http://image.ibb.co/ge6uAn/sh283000.jpg"),
    new Image(12, "http://image.ibb.co/cm4QGS/sh282992.jpg"),
    new Image(12, "http://image.ibb.co/iB2ebS/sh282984.jpg"),
    new Image(12, "http://image.ibb.co/jfabO7/sh282972.jpg"),
    new Image(12, "http://image.ibb.co/ij1GO7/sh282970.jpg"),
    new Image(12, "http://image.ibb.co/f89QGS/sh282958.jpg"),
    new Image(12, "http://image.ibb.co/n437Vn/sh282949.jpg"),
    new Image(12, "http://image.ibb.co/jeVzbS/sh282936.jpg"),
    new Image(12, "http://image.ibb.co/djnO37/sh282942.jpg"),
    new Image(12, "http://image.ibb.co/bv0bO7/sh282918.jpg"),
    new Image(12, "http://image.ibb.co/mRAzbS/sh282915.jpg"),
    new Image(12, "http://image.ibb.co/mPmSVn/sh282901.jpg"),
    new Image(12, "http://image.ibb.co/bDfnVn/sh282874.jpg"),
    new Image(12, "http://image.ibb.co/hivbO7/sh282878.jpg"),
    new Image(12, "http://image.ibb.co/mJNO37/sh282858.jpg"),
    new Image(12, "http://image.ibb.co/ky3wO7/sh282853.jpg"),
    new Image(12, "http://image.ibb.co/dWTVi7/sh282838.jpg"),
    new Image(12, "http://image.ibb.co/ko15GS/sh282826.jpg"),
    new Image(12, "http://image.ibb.co/mfUEAn/sh282817.jpg"),
    new Image(12, "http://image.ibb.co/cfaXwS/sh282806.jpg"),
    new Image(12, "http://image.ibb.co/hN60i7/sh282799.jpg"),
    new Image(12, "http://image.ibb.co/mLWY37/sh282795.jpg"),
    new Image(12, "http://image.ibb.co/jyY2wS/sh282783.jpg"),
    new Image(12, "http://image.ibb.co/bNg0i7/sh282770.jpg"),
    new Image(12, "http://image.ibb.co/cFvRO7/sh282756.jpg"),
    new Image(12, "http://image.ibb.co/is7vGS/sh282750.jpg"),
    new Image(12, "http://image.ibb.co/gfAFGS/sh282738.jpg"),
    new Image(12, "http://image.ibb.co/m3h6O7/sh282702.jpg"),
    new Image(12, "http://image.ibb.co/cGOPAn/sh282728.jpg"),
    new Image(12, "http://image.ibb.co/gLD2wS/sh282712.jpg"),
    new Image(12, "http://image.ibb.co/bHzaGS/sh282674.jpg"),
    new Image(12, "http://image.ibb.co/b8i2wS/sh282662.jpg"),
    new Image(12, "http://image.ibb.co/gVAFGS/sh282649.jpg"),
    new Image(12, "http://image.ibb.co/dNuxVn/sh282642.jpg"),
    new Image(12, "http://image.ibb.co/fdHHVn/sh282630.jpg"),
    new Image(12, "http://image.ibb.co/jMc6O7/sh282620.jpg"),
    new Image(12, "http://image.ibb.co/dc49bS/sh282614.jpg"),
    new Image(12, "http://image.ibb.co/b1OPAn/sh282607.jpg"),
    new Image(12, "http://image.ibb.co/dtCjAn/sh282594.jpg"),
    new Image(12, "http://image.ibb.co/kSuxVn/sh282575.jpg"),
    new Image(12, "http://image.ibb.co/dLC6O7/sh282563.jpg"),
    new Image(12, "http://image.ibb.co/idqRO7/sh282555.jpg"),
    new Image(12, "http://image.ibb.co/kZXHVn/sh282542.jpg"),
    new Image(12, "http://image.ibb.co/e7BY37/sh282527.jpg"),
    new Image(12, "http://image.ibb.co/kN7vGS/sh282522.jpg"),
    new Image(12, "http://image.ibb.co/hjk4An/sh282509.jpg"),
    new Image(12, "http://image.ibb.co/mR9Wqn/sh282501.jpg"),
    new Image(12, "http://image.ibb.co/hRBNwS/sh282493.jpg"),
    new Image(12, "http://image.ibb.co/kN2HVn/sh182475.jpg"),
    new Image(12, "http://image.ibb.co/d1gpbS/sh182455.jpg"),
    new Image(12, "http://image.ibb.co/kfb0i7/sh182465.jpg"),
    new Image(12, "http://image.ibb.co/iCdD37/sh182430.jpg"),
    new Image(12, "http://image.ibb.co/fhSHVn/sh182441.jpg"),
    new Image(12, "http://image.ibb.co/n0xHVn/sh182414.jpg"),
    new Image(12, "http://image.ibb.co/dEiD37/sh182406.jpg"),
    new Image(12, "http://image.ibb.co/mtWi37/sh182404.jpg"),
    new Image(12, "http://image.ibb.co/iBhCwS/sh182386.jpg"),
    new Image(12, "http://image.ibb.co/fuxebS/sh182377.jpg"),
    new Image(12, "http://image.ibb.co/f8qzbS/sh182368.jpg"),
    new Image(12, "http://image.ibb.co/gW5Mqn/sh182361.jpg"),
    new Image(12, "http://image.ibb.co/khfXwS/sh182337.jpg"),
    new Image(12, "http://image.ibb.co/mpoKbS/sh182321.jpg"),
    new Image(12, "http://image.ibb.co/mHMGO7/sh182305.jpg"),
    new Image(12, "http://image.ibb.co/jCHebS/sh182312.jpg"),
    new Image(12, "http://image.ibb.co/h6VMqn/sh182300.jpg"),
    new Image(12, "http://image.ibb.co/i7gSVn/sh182292.jpg"),
    new Image(12, "http://image.ibb.co/c1sO37/sh182271.jpg"),
    new Image(12, "http://image.ibb.co/cDD7Vn/sh182257.jpg"),
    new Image(12, "http://image.ibb.co/gH3kGS/sh182240.jpg"),
    new Image(12, "http://image.ibb.co/deNZAn/sh182246.jpg"),
    new Image(12, "http://image.ibb.co/kBXCwS/sh182229.jpg"),
    new Image(12, "http://image.ibb.co/cCbuAn/sh182221.jpg"),
    new Image(12, "http://image.ibb.co/f7kAi7/sh182210.jpg"),
    new Image(12, "http://image.ibb.co/kUCO37/sh182204.jpg"),
    new Image(12, "http://image.ibb.co/ffRSVn/sh182194.jpg"),
    new Image(12, "http://image.ibb.co/m39QGS/sh182180.jpg"),
    new Image(12, "http://image.ibb.co/hBuEAn/sh182177.jpg"),
    new Image(12, "http://image.ibb.co/cjRGO7/sh182154.jpg"),
    new Image(12, "http://image.ibb.co/daNqi7/sh182145.jpg"),
    new Image(12, "http://image.ibb.co/nA8wO7/sh182137.jpg"),
    new Image(12, "http://image.ibb.co/bCxCwS/sh182127.jpg"),
    new Image(12, "http://image.ibb.co/izNebS/sh182117.jpg"),
    new Image(12, "http://image.ibb.co/fVRSVn/sh182103.jpg"),
    new Image(12, "http://image.ibb.co/b6hCwS/sh182111.jpg"),
    new Image(12, "http://image.ibb.co/h62ZAn/sh182091.jpg"),
    new Image(12, "http://image.ibb.co/mK8kGS/sh182087.jpg"),
    new Image(12, "http://image.ibb.co/fzjgqn/sh182075.jpg"),
    new Image(12, "http://image.ibb.co/gVh1qn/sh182056.jpg"),
    new Image(12, "http://image.ibb.co/bCowO7/sh182052.jpg"),
    new Image(12, "http://image.ibb.co/nydwO7/sh182041.jpg"),
    new Image(12, "http://image.ibb.co/egUQGS/sh182032.jpg"),
    new Image(12, "http://image.ibb.co/gzq7fn/sh182020.jpg"),
    new Image(12, "http://image.ibb.co/mqV7fn/sh182003.jpg"),
    new Image(12, "http://image.ibb.co/j2hL0n/sh182013.jpg"),
    new Image(12, "http://image.ibb.co/mfTFY7/sh181986.jpg"),
    new Image(12, "http://image.ibb.co/k9q7fn/sh181989.jpg"),
    new Image(12, "http://image.ibb.co/esDtLn/sh181978.jpg"),
    new Image(12, "http://image.ibb.co/nxnymS/sh181970.jpg"),
    new Image(12, "http://image.ibb.co/kUjYLn/sh181956.jpg"),
    new Image(12, "http://image.ibb.co/b9LjRS/sh181928.jpg"),
    new Image(12, "http://image.ibb.co/mYYSfn/sh181952.jpg"),
    new Image(12, "http://image.ibb.co/b1mr6S/sh181924.jpg"),
    new Image(12, "http://image.ibb.co/iwpdmS/sh181917.jpg"),
    new Image(12, "http://image.ibb.co/d5vvY7/sh181905.jpg"),
    new Image(12, "http://image.ibb.co/btyFY7/sh181894.jpg"),
    new Image(12, "http://image.ibb.co/mjxaY7/sh181882.jpg"),
    new Image(12, "http://image.ibb.co/cur2D7/sh181878.jpg"),
    new Image(12, "http://image.ibb.co/mb900n/sh181867.jpg"),
    new Image(12, "http://image.ibb.co/jHfUt7/sh181857.jpg"),
    new Image(12, "http://image.ibb.co/bMHL0n/sh181847.jpg"),
    new Image(12, "http://image.ibb.co/dQRPRS/sh181822.jpg"),
    new Image(12, "http://image.ibb.co/fpmPRS/sh181809.jpg"),
  ]

  constructor() { }

  ngOnInit() {
  }

}