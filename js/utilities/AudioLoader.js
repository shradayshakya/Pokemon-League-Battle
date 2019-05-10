class AudioLoader {
  constructor() {
    this.audios = {};
    this.numberOfAudios = 0;
    this.numberOfLoadedAudios = 0;
    this.init();
  }

  init() {
    this.loadAudio("finalRoad", "audios/finalroad.mp3");
    this.loadAudio("finalBattle", "audios/finalbattle.mp3");
    this.loadAudio("pokemonRecovery", "audios/pokemonrecovery.mp3");
    this.loadAudio("victory", "audios/victory.mp3");

    this.loadAudio("doorOpen", "audios/dooropen.mp3");
    
    this.loadAudio("beep", "audios/beep.mp3");

    this.loadAudio("normalHit", "audios/normalhit.mp3");
    this.loadAudio("superEffectiveHit", "audios/supereffectivehit.mp3");
    this.loadAudio("lessEffectiveHit", "audios/lesseffectivehit.mp3");

    this.numberOfAudios = Object.keys(this.audios).length;
  }

  loadAudio(identifier, source) {
    let audio = new Audio();
    audio.src = source;
    audio.addEventListener("canplay", () => this.numberOfLoadedAudios++);
    this.audios[identifier] = audio;
  }

  hasAllAudiosLoaded() {
    return this.numberOfLoadedAudios == this.numberOfAudios ? true : false;
  }

  play(keyword) {
    this.audios[keyword].play();
  }

  stop(keyword) {
    this.audios[keyword].pause();
    this.audios[keyword].currentTime = 0;
  }
}
