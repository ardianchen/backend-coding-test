CREATE TABLE IF NOT EXISTS `rides` (
  `rideID` int(35) NOT NULL AUTO_INCREMENT,
  `startLat` decimal(4,0) NOT NULL,
  `startLong` decimal(10,0) NOT NULL,
  `endLat` decimal(10,0) NOT NULL,
  `endLong` decimal(10,0) NOT NULL,
  `riderName` varchar(255) NOT NULL,
  `driverName` varchar(255) NOT NULL,
  `driverVehicle` varchar(255) NOT NULL,
  `created` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`rideID`)
) ENGINE=InnoDB AUTO_INCREMENT=13271 DEFAULT CHARSET=utf8mb4;