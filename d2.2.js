// Tuple and Enum
var tom;
tom[0] = 'TOM';
console.log(tom);
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
    Direction[Direction["STAY"] = 4] = "STAY";
})(Direction || (Direction = {}));
