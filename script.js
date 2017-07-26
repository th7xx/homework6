const WARNING = "Sorry, you have no access"; 
        function Worker(name, surname, password){
            this.name = name; 
            this.surname =surname; 
            this.password =password; 

            this.chill = function(blocks){
                for(var i = 0; i < blocks.length; i++){
                    var temperatureIncrease = Math.random() * (50 - 150) + 50;
                    blocks[i].temperature += temperatureIncrease; 
                    var capacityDecrease = Math.random() * (80 - 200) + 80;
                    blocks[i].capacity -= capacityDecrease; 
                }
            }
        }

        function Block(temperature, capacity){
            this.temperature =temperature; 
            this.capacity = capacity; 
        }

        function NPP(worker){
            this.worker =worker;  
            var blocks = []; 
            
            this.addBlock = function(block){
                if(this.worker == undefined){
                    console.log(WARNING); 
                    return; 
                }
                this.blocks.push(block); 
            }
            this.watchTemperature = function(){
                if(this.worker == undefined){
                    console.log(WARNING); 
                    return; 
                }
                var res = ""; 
                for(var i in this.blocks){
                    res +=this.blocks[i].temperature + " "; 
                }
                console.log(res); 
            }
            this.addColdWater = function(numOfBlock, amountOfWater){
                if(this.worker == undefined){
                    console.log(WARNING); 
                    return; 
                }
                this.blocks[numOfBlock].capacity +=amountOfWater; 
            }
        }  