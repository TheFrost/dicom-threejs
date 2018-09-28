import * as THREE from 'three';

export default class DicomFile {
  constructor() {
    new THREE.FileLoader()
      .setResponseType( 'arraybuffer' )
      .load(
        'resources/head256x256x109.zip', 
        this.loadFileHandler.bind(this)
      );
  }

  loadFileHandler(data) {
    console.log(data);
  }

  update(time) {

  }
}