class MovingAverage {
    private currSize: number;
    private currSum: number;
    private firstAdded: number;
    private size: number;
    private index: number;
    private queue: Array<number> = [];

    constructor(size: number) {
        this.currSize = 0;
        this.currSum = 0;
        this.firstAdded = 0;
        this.size = size;
        this.index = 0;
    }

    next(val: number): number {

        this.queue.push(val);

        if(this.currSize == this.size){
            this.currSum = this.currSum - this.queue[this.index] + val;
            this.index += 1
        } else {
            
            this.currSum = this.currSum + val;
                
            this.currSize += 1;
        }

        return this.currSum/this.currSize;
    }
}

const movingAverage: MovingAverage = new MovingAverage(3);
movingAverage.next(1);
movingAverage.next(10);
movingAverage.next(3);
movingAverage.next(5);