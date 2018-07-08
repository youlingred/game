const GoldenFlower=require('./GoldenFlower')
class LogicFactory {
    static create(type){
        switch (type){
            case 'goldenFlower':
                return GoldenFlower;
        }
    }
}
exports = LogicFactory;
