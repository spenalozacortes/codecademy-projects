// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  const pAequorFactory = (specimenNum, dna) => ({
    specimenNum,
    dna,
    mutate() {
      let randomIndex = Math.floor(Math.random() * 15);
      let randomBase1 = this.dna[randomIndex];
      let randomBase2;
      
      do {
        randomBase2 = returnRandBase();
      } while(randomBase1 == randomBase2);
  
      this.dna[randomIndex] = randomBase2;
  
      return this.dna;
    },
    compareDNA(pAequor) {
      let count = 0;
  
      for(let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] == pAequor.dna[i]) {
          count++;
        }
      }
  
      console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${(count / 15 * 100).toFixed(2)}% DNA in common`);
    },
    willLikelySurvive() {
      let count = 0;
  
      for(let base of this.dna) {
        if(base === 'C' || base === 'G') {
          count++;
        }
      }
  
      return (count / 15) >= 0.6;
    }
  });
  
  let pAequorArray = [];
  let specimenNum = 1;
  
  while(pAequorArray.length < 30) {
    let specimen = pAequorFactory(specimenNum, mockUpStrand());
  
    if(specimen.willLikelySurvive()) {
      pAequorArray.push(specimen);
    }
  
    specimenNum++;
  }
  
  console.log(pAequorArray);