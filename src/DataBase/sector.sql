CREATE Database if not exists `sistemaTurnos`;
use `sistemaTurnos`;

CREATE TABLE `orderly_turn` (
  `id` smallint(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  `code` varchar(4) UNIQUE NOT NULL,
  `box` text NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
  `deleted_at` date NOT NULL,
   	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` smallint(6) UNSIGNED AUTO_INCREMENT NOT NULL,
  `name` varchar(25) NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `created_at` date NOT NULL,
  `updated_at` date NOT NULL,
   	PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;