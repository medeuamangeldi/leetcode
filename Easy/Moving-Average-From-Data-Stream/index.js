var MovingAverage = /** @class */ (function () {
    function MovingAverage(size) {
        this.queue = [];
        this.currSize = 0;
        this.currSum = 0;
        this.firstAdded = 0;
        this.size = size;
        this.index = 0;
    }
    MovingAverage.prototype.next = function (val) {
        this.queue.push(val);
        if (this.currSize == this.size) {
            this.currSum = this.currSum - this.queue[this.index] + val;
            this.index += 1;
        }
        else {
            this.currSum = this.currSum + val;
            this.currSize += 1;
        }
        console.log(this.currSum / this.currSize, this.currSum, this.currSize);
        return this.currSum / this.currSize;
    };
    return MovingAverage;
}());
var movingAverage = new MovingAverage(3);
movingAverage.next(1);
movingAverage.next(10);
movingAverage.next(3);
movingAverage.next(5);
