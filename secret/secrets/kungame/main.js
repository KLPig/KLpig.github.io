class Block{
    constructor(isk, id){
        self.isk = isk
        self.id = id
        if(isk){
            e = document.createAttribute('IMG')
            e.src = './resources/kun.png'
            e.className = 'block'
        }
    }
}