var stratagems = [{
	id: 1,
},
{
	id: 2,
},
{
	id: 3,
	active: true,
	init: function() {
		let that = player.move ? player : computer;
		if (player.ship.name == "Фрегат") ++that.ship.evasion;
		if (computer.ship.name == "Фрегат") ++that.ship.evasion;
		game.setArms.call(that);
	}
},
{
	id: 4,
},
{
	id: 5,
	active: true,
	init: function() {
		let that = player.move ? player : computer;
		if (player.ship.name == "Галеон") ++that.ship.evasion;
		if (computer.ship.name == "Галеон") ++that.ship.evasion;
		game.setArms.call(that);
	}
},
{
	id: 6,
},
{
	id: 7,
},
{
	id: 8,
},
{
	id: 9,
},
{
	id: 10,
},
{
	id: 11,
},
{
	id: 12,
},
{
	id: 13,
},
{
	id: 14,
},
{
	id: 15,
},
{
	id: 16,
},
{
	id: 17,
},
{
	id: 18,
},
{
	id: 19,
},
{
	id: 20,
},
{
	id: 21,
},
{
	id: 22,
},
{
	id: 23,
},
{
	id: 24,
},
{
	id: 25,
},
{
	id: 26,
},
{
	id: 27,
},
{
	id: 28,
},
{
	id: 29,
},
{
	id: 30,
}];