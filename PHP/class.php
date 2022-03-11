<?php

class Calendar {
	public $prev;
	public $next;
	public $yearMonth;
	private $_thisMonth;
    public $title_yearMonth;

	public function __construct() {

		//URLから値を取得
		try {
			//エラー処理
			if (!isset($_GET['t']) || !preg_match('/\A\d{4}-\d{2}\z/', $_GET['t'])) {
				throw new Exception();
			}
			//通常処理
			$this->_thisMonth = new DateTime($_GET['t']);
		} catch (Exception $e) {
			$this->_thisMonth = new DateTime('first day of this month');
		}

		$this->title_yearMonth = $this->_thisMonth->format('Y年 n月'); //指定した月取得(タイトル)
        $this->yearMonth = $this->_thisMonth->format('F Y'); //指定した月取得
		$this->next = $this->_createNextLink(); //翌月の値取得
		$this->prev = $this->_createPrevLink(); //先月の値取得
	}
	//先月の値計算
	private function _createPrevLink() {
		$dt = clone $this->_thisMonth;
		return $dt->modify('-1 month')->format('Y-m');
	}
	//翌月の値計算
	private function _createNextLink() {
		$dt = clone $this->_thisMonth;
		return $dt->modify('+1 month')->format('Y-m');
	}
	//先月の週一から末日生成
	private function _getTail() {
		$tail = '';
		$lastDayOfPrevMonth = new DateTime('last day of '.$this->yearMonth. '-1 month');
		while ($lastDayOfPrevMonth->format('w') < 6) {
			$tail = sprintf('<td class="gray">%d</td>', $lastDayOfPrevMonth->format('d')) . $tail;
			$lastDayOfPrevMonth->sub(new DateInterval('P1D'));
		}
		return $tail;
	}

	//当月の初日から末日生成
	private function _getBody() {
		$body = '';
		$period = new DatePeriod(
			new DateTime('first day of '.$this->yearMonth),
			new DateInterval('P1D'),
			new DateTime('first day of '.$this->yearMonth. '+1 month')
		);
		$today = new DateTime('d');

		foreach ($period as $day) {
			//今日の日付強調
			$todayClass = ($today->format('Y-m-d') === $day->format('Y-m-d')) ? 'today': '';

			if ($day->format('w') % 7 === 0){ $body .= '</tr><tr>'; }
		  	$body .= sprintf('<td class="youbi_%d %s">%d</td>',$day->format('w') ,$todayClass, $day->format('d'));
		}
		return $body;
	}
	//翌月の初日から週一生成
	private function _getHead() {
		$head = '';
		$firstDayOfNextMonth = new DateTime('first day of '.$this->yearMonth. '+1 month');
		while ($firstDayOfNextMonth->format('w') > 0) {
			$head .= sprintf('<td class="gray">%d</td>',$firstDayOfNextMonth->format('d'));
			$firstDayOfNextMonth->add(new DateInterval('P1D'));
		}
		return $head;
	}
	//1ヵ月分表示
	public function show() {
		$tail = $this->_getTail();
		$body = $this->_getBody();
		$head = $this->_getHead();
		echo '<tr>' . $tail . $body . $head . '</tr>';
	}
}
