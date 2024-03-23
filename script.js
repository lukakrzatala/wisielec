window.onload = () => {
	const $AppWindow = document.getElementById("appWindow");
	$AppWindow.classList.add("window");

	const $Wrapper = document.createElement("div");
	$Wrapper.classList.add("wrap");
	$AppWindow.appendChild($Wrapper);

	const $MainMenu = document.createElement("div");
	$MainMenu.classList.add("main-menu");

	const $Title = document.createElement("h1");
	$Title.classList.add("title");
	$Title.textContent = "hanQman!";
	$MainMenu.appendChild($Title);

	const $InputName = document.createElement("input");
	$InputName.classList.add("input");
	$InputName.setAttribute("input", "text");
	$InputName.setAttribute("value", "Type your name!");
	$InputName.setAttribute("spellcheck", "false");
	$InputName.setAttribute("onfocus", "this.value=''");
	$MainMenu.appendChild($InputName);

	const $ContinueGameBtn = document.createElement("button");
	$ContinueGameBtn.classList.add("main-btn", "cont-btn");
	$ContinueGameBtn.textContent = "continue game";

	const $NewGameBtn = document.createElement("button");
	$NewGameBtn.classList.add("main-btn");
	$NewGameBtn.textContent = "new game";
	$MainMenu.appendChild($NewGameBtn);

	const $StatsBtn = document.createElement("button");
	$StatsBtn.classList.add("main-btn");
	$StatsBtn.textContent = "show stats";

	const $Game = document.createElement("div");
	$Game.classList.add("game");

	const $ButtonContainer = document.createElement("div");
	$ButtonContainer.classList.add("btn-container");

	const $Points = document.createElement("div");
	$Points.classList.add("points");

	const $RiddleText = document.createElement("h3");
	$RiddleText.classList.add("riddle");
	$RiddleText.textContent = `Press the letter on keyboard to guess the movie! (in polish)`;

	const $SuffleWordBtn = document.createElement("button");
	$SuffleWordBtn.classList.add("suffle-btn", "game-btn");

	const $GiveUpBtn = document.createElement("button");
	$GiveUpBtn.classList.add("giveup-btn", "game-btn");

	const $BackBtn = document.createElement("button");
	$BackBtn.classList.add("back-btn", "game-btn");

	const $GameContainer = document.createElement("div");
	$GameContainer.classList.add("game-container");

	const $HangmanBox = document.createElement("div");
	$HangmanBox.classList.add("hangman-box");

	const $LetterInput = document.createElement("div");

	const $Submit = document.createElement("div");
	$Submit.classList.add("submit");

	const $BarFloor = document.createElement("div");
	$BarFloor.classList.add("bar-floor");

	const $BarVertical = document.createElement("div");
	$BarVertical.classList.add("bar-ver");

	const $BarHorizontal = document.createElement("div");
	$BarHorizontal.classList.add("bar-hor");

	const $BarSupport = document.createElement("div");
	$BarSupport.classList.add("bar-sup");

	const $Rope = document.createElement("div");
	$Rope.classList.add("rope");

	const $Head = document.createElement("div");
	$Head.classList.add("hang-head");

	const $Body = document.createElement("div");
	$Body.classList.add("hang-body");

	const $Legleft = document.createElement("div");
	$Legleft.classList.add("left-leg");

	const $LegRight = document.createElement("div");
	$LegRight.classList.add("right-leg");

	const $ArmLeft = document.createElement("div");
	$ArmLeft.classList.add("left-arm");

	const $ArmRight = document.createElement("div");
	$ArmRight.classList.add("right-arm");

	const $TheEndInfo = document.createElement("span");
	$TheEndInfo.classList.add("the-end-info");
	$TheEndInfo.textContent = "you died";

	const $WatchwordBox = document.createElement("div");
	$WatchwordBox.classList.add("watchword");

	const $StatisticsMenu = document.createElement("div");
	$StatisticsMenu.classList.add("statistics-menu");

	const $StatisticsTable = document.createElement("div");
	$StatisticsTable.classList.add("statistics-table");

	const $List = document.createElement("ul");
	$List.classList.add("statistics-list");

	const createMainMenu = () => {
		// funcja tworząca menu główne
		$Wrapper.innerHTML = "";
		$Wrapper.appendChild($MainMenu);
	};

	createMainMenu();

	const createGameWindow = () => {
		// funkcja tworząca okno gry
		$Wrapper.innerHTML = "";
		$Wrapper.appendChild($Game);
		$Game.appendChild($ButtonContainer);
		$ButtonContainer.appendChild($Points);
		$ButtonContainer.appendChild($RiddleText);
		$ButtonContainer.appendChild($SuffleWordBtn);
		$ButtonContainer.appendChild($GiveUpBtn);
		$ButtonContainer.appendChild($BackBtn);
		$Game.appendChild($GameContainer);
		$GameContainer.appendChild($HangmanBox);
		$GameContainer.appendChild($LetterInput);
		$GameContainer.appendChild($Submit);
		$Game.appendChild($WatchwordBox);
		$LetterInput.value = "";
		$WatchwordBox.innerHTML = "";
	};

	createStatisticWindow = () => {
		// funkcja tworząca okno statystyk
		$Wrapper.innerHTML = "";
		$ButtonContainer.innerHTML = "";
		$Wrapper.appendChild($StatisticsMenu);
		$StatisticsMenu.appendChild($ButtonContainer);
		$StatisticsMenu.appendChild($StatisticsTable);
		$ButtonContainer.appendChild($BackBtn);
		$StatisticsTable.appendChild($List);
	};

	const continueGame = () => {
		// funkcja zmieniająca input name na continue game po wybraniu backbtn
		$Wrapper.innerHTML = "";
		$Wrapper.appendChild($Game);
		$Game.appendChild($ButtonContainer);
		$ButtonContainer.appendChild($Points);
		$ButtonContainer.appendChild($SuffleWordBtn);
		$ButtonContainer.appendChild($GiveUpBtn);
		$ButtonContainer.appendChild($BackBtn);
		$Game.appendChild($GameContainer);
		$GameContainer.appendChild($HangmanBox);
		$GameContainer.appendChild($LetterInput);
		$GameContainer.appendChild($Submit);
		$Game.appendChild($WatchwordBox);
	};

	const watchWord = [
		// tablica z hasłami do rozwiązania
		"CZŁOWIEK Z BLIZNĄ",
		"OJCIEC CHRZESTNY",
		"ZIELONA MILA",
		"SKAZANI NA SHAWSHANK",
		"MECHANICZNA POMARAŃCZA",
		"LOT NAD KUKUŁCZYM GNIAZDEM",
		"PRZEMINĘŁO Z WIATREM",
		"ŚNIADANIE U TIFFANYEGO",
		"LŚNIENIE",
		"MILCZENIE OWIEC",
		"PODZIEMNY KRĄG",
		"WŁADCA PIERŚCIENI",
		"SZCZĘKI",
		"POLOWANIE NA CZERWONY PAŹDZIERNIK",
		"PIANISTA",
		"FORREST GUMP",
		"PSYCHOZA",
		"PULP FICTION",
		"MATRIX",
		"GLADIATOR",
		"TAKSÓWKARZ",
		"CHARLIE I FABRYKA CZEKOLADY",
		"POWRÓT DO PRZYSZŁOŚCI",
	];

	let arrWW; // pusta tablica do podziału hasła na litery
	let arrWWNode = []; // pusta tablica do przypisania każdej litery hasłao jako adresu html
	let draw;
	const players = []; // tablica do przypisania graczy

	const createWatchWord = str => {
		// funkcja tworząca poszczególne miejsca dla liter hasła  w oknie game
		// $WatchwordBox.outerHTML = "";

		arrWW = str.split("");
		let space = " ";
		for (let i = 0; i < arrWW.length; i++) {
			if (arrWW[i] === space) {
				const $Space = document.createElement("div");
				$WatchwordBox.appendChild($Space);
				$Space.classList.add("space");
				arrWWNode.push($Space);
			} else {
				const $Letter = document.createElement("input");
				$WatchwordBox.appendChild($Letter);
				$Letter.setAttribute("type", "text");
				$Letter.setAttribute("onkeydown", "return false");
				$Letter.classList.add("letter");
				$Letter.textContent = arrWW[i];
				arrWWNode.push($Letter);
			}
		}
	};

	const hangManArr = [
		// poszczególne etapy wisielca
		$BarFloor,
		$BarVertical,
		$BarHorizontal,
		$BarSupport,
		$Rope,
		$Head,
		$Body,
		$Legleft,
		$LegRight,
		$ArmLeft,
		$ArmRight,
	];
	let hangmanProgress = 0;
	let endDraw = hangManArr.length;
	let points = 0;

	const hangManDraw = () => {
		// funkcja rysująca wisielca

		if (hangmanProgress < endDraw - 1) {
			$HangmanBox.appendChild(hangManArr[hangmanProgress]);
			hangmanProgress++;
		} else if (hangmanProgress === endDraw - 1) {
			$HangmanBox.classList.add("hangman-box-dead");
			$HangmanBox.appendChild(hangManArr[hangmanProgress]);
			$HangmanBox.appendChild($TheEndInfo);
			points = 0;
			$Points.textContent = `${points} pts`;
			hangmanProgress++;
		} else {
		}
	};

	let watchWordSpliceArr = []; // pusta tablica dla hasła

	const watchWordSpliced = () => {
		// funcja dodająca hasła do ww. tablicy w celu umożliwienia losowania hasła

		for (let i = 0; i < watchWord.length; i++) {
			watchWordSpliceArr.push(watchWord[i]);
		}
	};

	const drawWatchWord = () => {
		//funkcja losująca hasło i tworząca pola do wpisania liter
		$WatchwordBox.innerHTML = "";
		arrWWNode = [];
		draw = Math.round(Math.random() * (watchWordSpliceArr.length - 1));
		createWatchWord(watchWordSpliceArr[draw]);
		watchWordSpliceArr.splice(draw, 1);
	};

	const newGame = () => {
		//funkcja newGame, tworząca okno gry
		createGameWindow();
		watchWordSpliced();
		drawWatchWord();
		players.push($InputName.value);
		points = 0;
		$Points.textContent = `${points} pts`;
		hangmanProgress = 0;
		$HangmanBox.innerHTML = "";
		$HangmanBox.classList.remove("hangman-box-dead");
	};

	$NewGameBtn.addEventListener("click", () => {
		if ($InputName.value === "") {
			return;
		} else {
			newGame();
		}
	});

	let timeout;
	const $ShowTipForShufflee = () => {
		$RiddleText.textContent = "It is to difficult? Try another movie!";
		timeout = undefinied;
	};

	const $ShowTipForGiveUp = () => {
		$RiddleText.textContent = "Give up and save your score.";
		timeout = undefinied;
	};

	const $ShowTipForBackBtn = () => {
		$RiddleText.textContent = "Go back to main menu.";
		timeout = undefinied;
	};

	const $HideTip = () => {
		$RiddleText.textContent = "Press the letter on keyboard to guess the movie! (in polish)!";
		if (timeout) {
			clearTimeout(timeout);
			timeout = undefinied;
		}
	};

	$SuffleWordBtn.addEventListener("mouseover", () => {
		timeout = setTimeout($ShowTipForShufflee, 500);
	});

	$SuffleWordBtn.addEventListener("mouseout", $HideTip);

	$SuffleWordBtn.addEventListener("click", () => {
		if (watchWordSpliceArr.length != 0) {
			drawWatchWord();
		} else {
			alert(`there is no more answers`);
		}
	});

	$ContinueGameBtn.addEventListener("click", () => {
		continueGame();
	});

	const playersDataObj = {};

	const playersStatisticsSave = () => {
		playersDataObj[players[players.length - 1]] = playersDataObj[
			players[players.length - 1]
		]
			? playersDataObj[players[players.length - 1]] + points
			: points;
		$MainMenu.appendChild($StatsBtn);
	};
	$GiveUpBtn.addEventListener("mouseover", () => {
		timeout = setTimeout($ShowTipForGiveUp, 500);
	});

	$GiveUpBtn.addEventListener("mouseout", $HideTip);

	$GiveUpBtn.addEventListener("click", () => {
		arrWWNode = [];
		createMainMenu();
		playersStatisticsSave();
		$MainMenu.replaceChild($InputName, $ContinueGameBtn);
		points = 0;
	});
	$BackBtn.addEventListener("mouseover", () => {
		timeout = setTimeout($ShowTipForBackBtn, 500);
	});

	$BackBtn.addEventListener("mouseout", $HideTip);
	$BackBtn.addEventListener("click", () => {
		if ($List.innerHTML) {
			$List.innerHTML = "";
			createMainMenu();
		} else {
			// arrWWNode = [];

			createMainMenu();
			//
			$MainMenu.replaceChild($ContinueGameBfdsdgfgtn, $InputName);
		}
	});

	window.addEventListener("keypress", event => {
		char = event.key;
		console.log(char);
		if (arrWW.includes(char.toUpperCase())) {
			for (i = 0; i < arrWW.length; i++)
				if (
					arrWW[i] === char.toUpperCase() &&
					arrWW[i] != arrWWNode[i].value &&
					char.toUpperCase() != " " &&
					hangmanProgress != endDraw
				) {
					arrWWNode[i].setAttribute("value", arrWW[i]);
					points += 10;
					$Points.textContent = `${points} pts`;
					console.log(arrWWNode[i]);
				}
		} else {
			hangManDraw();
		}
	});

	const statisticsListCreator = () => {
		let listArrSorted = Object.entries(playersDataObj).sort(
			([, a], [, b]) => b - a
		);

		console.log(listArrSorted);
		console.log(playersDataObj);

		for (let i = 0; i < listArrSorted.length; i++) {
			const $ListEntry = document.createElement("li");
			$ListEntry.classList.add("statistics-entry");
			$List.appendChild($ListEntry);
			$ListEntry.textContent = `${listArrSorted[i][0]} have ${listArrSorted[i][1]} points`;
		}
	};

	$StatsBtn.addEventListener("click", () => {
		$StatisticsTable.innerHTML = "";
		createStatisticWindow();
		statisticsListCreator();
	});
};
