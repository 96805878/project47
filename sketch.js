
var player;
var bgImg;
var cupheadRun,cupheadStand,cupheadHit,cupheadJump,cupheadWinpose,cupheadCrouch,cupheadWalkRight,cupheadWalkLeft,cupheadWalkTopRight,cupheadWalkBottomRight,cupheadWalkBottom,cupheadWalkTop,cupheadWalkBottomLeft;

var acorn,boomerang;
var boss,bossIntro,bossIdle,bossCreate,bossFireSeeds,bossFaceAttackHigh,bossFaceAttackLow,bossFinalFormIntro,bossFinalFormIdle,bossFinalFormFP,bossFinalFormDeath;
var gamestate="overworld";
var cupheadFightIntro,cupheadFightIdle,cupheadFightJump, cupheadFightRun,cupheadFightRunShooting,cupheadFightRunShootingDiagonalUp;
var ground;
var seed, vine;
var heartImg;
var invisWall,invisWall2,invisWall3,invisWall4,invisWall5,invisWall6,invisWall7,invisWall8,invisWall9,invisWall10;
var invisWallGroup;
var invisWall11;
var flag;



var cupheadRunNormal,cupheadShootStraight,cupheadShootUp,cupheadShootDown,cupheadShootDiagonalUp,cupheadShootDiagonalDown;

function preload(){
  bgImg = loadImage("Images/background.png");

  //CUPHEAD OVERWORLD
  cupheadRun = loadAnimation("Images/cuphead/run1.png","Images/cuphead/run2.png","Images/cuphead/run3.png","Images/cuphead/run4.png","Images/cuphead/run5.png","Images/cuphead/run6.png","Images/cuphead/run7.png","Images/cuphead/run8.png")
  cupheadStand = loadAnimation("Images/cuphead/stand.png")
  cupheadCrouch = loadAnimation("Images/cuphead/crouch.png");
  cupheadJump = loadAnimation("Images/cuphead/jump1.png","Images/cuphead/jump2.png","Images/cuphead/jump3.png","Images/cuphead/jump4.png")
  cupheadWinpose = loadAnimation("Images/cuphead/winpose1.png","Images/cuphead/winpose2.png","Images/cuphead/winpose3.png","Images/cuphead/winpose4.png")
  cupheadHit = loadAnimation("Images/cuphead/hit1.png","Images/cuphead/hit2.png","Images/cuphead/hit3.png")

  cupheadStandRight = loadAnimation("Images/cuphead/overworld/idle/right.png")
  cupheadStandLeft = loadAnimation("Images/cuphead/overworld/idle/left.png")
  cupheadStandUp = loadAnimation("Images/cuphead/overworld/idle/up.png")
  cupheadStandDown = loadAnimation("Images/cuphead/overworld/idle/down.png")

  cupheadWalkRight = loadAnimation("Images/cuphead/overworld/rightwalk1.png", "Images/cuphead/overworld/rightwalk2.png", "Images/cuphead/overworld/rightwalk3.png", "Images/cuphead/overworld/rightwalk4.png", "Images/cuphead/overworld/rightwalk5.png", "Images/cuphead/overworld/rightwalk6.png", "Images/cuphead/overworld/rightwalk7.png", "Images/cuphead/overworld/rightwalk8.png", "Images/cuphead/overworld/rightwalk9.png")
  cupheadWalkLeft = loadAnimation("Images/cuphead/overworld/leftwalk1.png","Images/cuphead/overworld/leftwalk2.png","Images/cuphead/overworld/leftwalk3.png","Images/cuphead/overworld/leftwalk4.png","Images/cuphead/overworld/leftwalk5.png","Images/cuphead/overworld/leftwalk6.png","Images/cuphead/overworld/leftwalk7.png","Images/cuphead/overworld/leftwalk8.png","Images/cuphead/overworld/leftwalk9.png",)
  cupheadWalkTop = loadAnimation("Images/cuphead/overworld/walkup1.png","Images/cuphead/overworld/walkup2.png","Images/cuphead/overworld/walkup3.png","Images/cuphead/overworld/walkup4.png","Images/cuphead/overworld/walkup5.png","Images/cuphead/overworld/walkup6.png","Images/cuphead/overworld/walkup7.png","Images/cuphead/overworld/walkup8.png","Images/cuphead/overworld/walkup9.png","Images/cuphead/overworld/walkup10.png","Images/cuphead/overworld/walkup11.png","Images/cuphead/overworld/walkup12.png",)
  cupheadWalkBottom = loadAnimation("Images/cuphead/overworld/bottomwalk1.png", "Images/cuphead/overworld/bottomwalk2.png", "Images/cuphead/overworld/bottomwalk3.png", "Images/cuphead/overworld/bottomwalk4.png", "Images/cuphead/overworld/bottomwalk5.png", "Images/cuphead/overworld/bottomwalk6.png", "Images/cuphead/overworld/bottomwalk7.png", "Images/cuphead/overworld/bottomwalk8.png", "Images/cuphead/overworld/bottomwalk9.png", "Images/cuphead/overworld/bottomwalk10.png", "Images/cuphead/overworld/bottomwalk11.png", "Images/cuphead/overworld/bottomwalk12.png", "Images/cuphead/overworld/bottomwalk13.png")
  
  //CUPHEAD FIGHT
  cupheadFightIntro = loadAnimation("Images/cuphead/Cuphead/Intro/intro_1.png","Images/cuphead/Cuphead/Intro/intro_3.png","Images/cuphead/Cuphead/Intro/intro_5.png","Images/cuphead/Cuphead/Intro/intro_7.png","Images/cuphead/Cuphead/Intro/intro_9.png","Images/cuphead/Cuphead/Intro/intro_11.png","Images/cuphead/Cuphead/Intro/intro_13.png","Images/cuphead/Cuphead/Intro/intro_15.png","Images/cuphead/Cuphead/Intro/intro_17.png","Images/cuphead/Cuphead/Intro/intro_19.png","Images/cuphead/Cuphead/Intro/intro_21.png","Images/cuphead/Cuphead/Intro/intro_23.png","Images/cuphead/Cuphead/Intro/intro_25.png","Images/cuphead/Cuphead/Intro/intro_27.png")
  cupheadFightIdle = loadAnimation("Images/cuphead/Cuphead/Idle/cuphead_idle_0001.png","Images/cuphead/Cuphead/Idle/cuphead_idle_0002.png","Images/cuphead/Cuphead/Idle/cuphead_idle_0003.png","Images/cuphead/Cuphead/Idle/cuphead_idle_0004.png","Images/cuphead/Cuphead/Idle/cuphead_idle_0005.png")
  cupheadFightJump = loadAnimation("Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0001.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0002.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0003.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0004.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0005.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0006.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0007.png","Images/cuphead/Cuphead/Jump/Cuphead/cuphead_jump_0008.png")
  cupheadFightRun = loadAnimation("Images/cuphead/Cuphead/Run/Normal/cuphead_run_0001.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0002.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0003.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0004.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0005.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0006.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0007.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0008.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0009.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0010.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0011.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0012.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0013.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0014.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0015.png","Images/cuphead/Cuphead/Run/Normal/cuphead_run_0016.png")
  cupheadFightRunShooting = loadAnimation("Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0001.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0002.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0003.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0004.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0005.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0005.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0006.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0007.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0008.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0009.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0010.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0011.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0012.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0013.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0014.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0015.png","Images/cuphead/Cuphead/Run/Shooting/Straight/cuphead_run_shoot_0016.png")
  //cupheadFightRunShootingDiagonalUp = loadAnimation("Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0001.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0002.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0003.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0004.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0005.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0006.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0007.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0008.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0009.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0010.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0011.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0012.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0013.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0012.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0013.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0014.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0015.png","Images/cuphead/Cuphead/Run/Shooting/DiagonalUp/cuphead_run_shoot_diag_up_0016.png")
  
  cupheadShootStraight = loadAnimation("Images/cuphead/Cuphead/Shoot/Straight/cuphead_shoot_straight_0001.png","Images/cuphead/Cuphead/Shoot/Straight/cuphead_shoot_straight_0002.png","Images/cuphead/Cuphead/Shoot/Straight/cuphead_shoot_straight_0003.png")
  cupheadShootUp = loadAnimation("Images/cuphead/Cuphead/Shoot/Up/cuphead_shoot_up_0001.png","Images/cuphead/Cuphead/Shoot/Up/cuphead_shoot_up_0002.png","Images/cuphead/Cuphead/Shoot/Up/cuphead_shoot_up_0003.png")
  cupheadShootDown = loadAnimation("Images/cuphead/Cuphead/Shoot/Down/cuphead_shoot_down_0001.png","Images/cuphead/Cuphead/Shoot/Down/cuphead_shoot_down_0002.png","Images/cuphead/Cuphead/Shoot/Down/cuphead_shoot_down_0003.png",)
  cupheadShootDiagonalUp = loadAnimation("Images/cuphead/Cuphead/Shoot/DiagonalUp/cuphead_shoot_diagonal_up_0001.png","Images/cuphead/Cuphead/Shoot/DiagonalUp/cuphead_shoot_diagonal_up_0002.png","Images/cuphead/Cuphead/Shoot/DiagonalUp/cuphead_shoot_diagonal_up_0003.png")
  cupheadShootDiagonalDown = loadAnimation("Images/cuphead/Cuphead/Shoot/DiagonalDown/cuphead_shoot_diagonal_down_0001.png","Images/cuphead/Cuphead/Shoot/DiagonalDown/cuphead_shoot_diagonal_down_0002.png","Images/cuphead/Cuphead/Shoot/DiagonalDown/cuphead_shoot_diagonal_down_0003.png")



  bossIntro = loadAnimation("Images/boss/carnation/Intro/Intro_01.png","Images/boss/carnation/Intro/Intro_02.png","Images/boss/carnation/Intro/Intro_03.png","Images/boss/carnation/Intro/Intro_04.png","Images/boss/carnation/Intro/Intro_05.png","Images/boss/carnation/Intro/Intro_06.png","Images/boss/carnation/Intro/Intro_07.png","Images/boss/carnation/Intro/Intro_08.png","Images/boss/carnation/Intro/Intro_09.png","Images/boss/carnation/Intro/Intro_10.png","Images/boss/carnation/Intro/Intro_11.png","Images/boss/carnation/Intro/Intro_12.png","Images/boss/carnation/Intro/Intro_13.png","Images/boss/carnation/Intro/Intro_14.png","Images/boss/carnation/Intro/Intro_15.png","Images/boss/carnation/Intro/Intro_16.png","Images/boss/carnation/Intro/Intro_17.png","Images/boss/carnation/Intro/Intro_18.png","Images/boss/carnation/Intro/Intro_19.png","Images/boss/carnation/Intro/Intro_20.png")
  bossIdle = loadAnimation("Images/boss/carnation/Idle/Idle_01.png","Images/boss/carnation/Idle/Idle_03.png","Images/boss/carnation/Idle/Idle_05.png","Images/boss/carnation/Idle/Idle_07.png","Images/boss/carnation/Idle/Idle_09.png","Images/boss/carnation/Idle/Idle_11.png","Images/boss/carnation/Idle/Idle_13.png","Images/boss/carnation/Idle/Idle_15.png","Images/boss/carnation/Idle/Idle_17.png","Images/boss/carnation/Idle/Idle_19.png","Images/boss/carnation/Idle/Idle_21.png","Images/boss/carnation/Idle/Idle_23.png")
  bossCreate = loadAnimation("Images/boss/carnation/CreatingObject/Create_01.png","Images/boss/carnation/CreatingObject/Create_03.png","Images/boss/carnation/CreatingObject/Create_05.png","Images/boss/carnation/CreatingObject/Create_07.png","Images/boss/carnation/CreatingObject/Create_09.png","Images/boss/carnation/CreatingObject/Create_11.png","Images/boss/carnation/CreatingObject/Create_13.png","Images/boss/carnation/CreatingObject/Create_15.png","Images/boss/carnation/CreatingObject/Create_17.png","Images/boss/carnation/CreatingObject/Create_18.png","Images/boss/carnation/CreatingObject/Create_19.png","Images/boss/carnation/CreatingObject/Create_21a.png","Images/boss/carnation/CreatingObject/Create_18.png","Images/boss/carnation/CreatingObject/Create_19.png","Images/boss/carnation/CreatingObject/Create_21a.png","Images/boss/carnation/CreatingObject/Create_18.png","Images/boss/carnation/CreatingObject/Create_19.png","Images/boss/carnation/CreatingObject/Create_21a.png","Images/boss/carnation/CreatingObject/Create_18.png","Images/boss/carnation/CreatingObject/Create_19.png","Images/boss/carnation/CreatingObject/Create_21a.png","Images/boss/carnation/CreatingObject/Create_21a.png","Images/boss/carnation/CreatingObject/Create_22.png","Images/boss/carnation/CreatingObject/Create_23.png","Images/boss/carnation/CreatingObject/Create_25.png")
  bossFireSeeds = loadAnimation("Images/boss/carnation/FiringSeeds/FS_01.png","Images/boss/carnation/FiringSeeds/FS_02.png","Images/boss/carnation/FiringSeeds/FS_03.png","Images/boss/carnation/FiringSeeds/FS_04.png","Images/boss/carnation/FiringSeeds/FS_05.png","Images/boss/carnation/FiringSeeds/FS_06.png","Images/boss/carnation/FiringSeeds/FS_07.png","Images/boss/carnation/FiringSeeds/FS_08.png","Images/boss/carnation/FiringSeeds/FS_09.png","Images/boss/carnation/FiringSeeds/FS_10.png","Images/boss/carnation/FiringSeeds/FS_11.png","Images/boss/carnation/FiringSeeds/FS_12.png","Images/boss/carnation/FiringSeeds/FS_13.png","Images/boss/carnation/FiringSeeds/FS_14.png","Images/boss/carnation/FiringSeeds/FS_15.png","Images/boss/carnation/FiringSeeds/FS_16.png","Images/boss/carnation/FiringSeeds/FS_17.png","Images/boss/carnation/FiringSeeds/FS_18.png","Images/boss/carnation/FiringSeeds/FS_19.png","Images/boss/carnation/FiringSeeds/FS_20.png","Images/boss/carnation/FiringSeeds/FS_21.png","Images/boss/carnation/FiringSeeds/FS_22.png")
  bossFaceAttackHigh = loadAnimation("Images/boss/carnation/FaceAttack/FA_High_01.png","Images/boss/carnation/FaceAttack/FA_High_02.png","Images/boss/carnation/FaceAttack/FA_High_03.png","Images/boss/carnation/FaceAttack/FA_High_04.png","Images/boss/carnation/FaceAttack/FA_High_05.png","Images/boss/carnation/FaceAttack/FA_High_06.png","Images/boss/carnation/FaceAttack/FA_High_07.png","Images/boss/carnation/FaceAttack/FA_High_08.png","Images/boss/carnation/FaceAttack/FA_High_09.png","Images/boss/carnation/FaceAttack/FA_High_10.png","Images/boss/carnation/FaceAttack/FA_High_11.png","Images/boss/carnation/FaceAttack/FA_High_12.png","Images/boss/carnation/FaceAttack/FA_High_13.png","Images/boss/carnation/FaceAttack/FA_High_14.png","Images/boss/carnation/FaceAttack/FA_High_15.png","Images/boss/carnation/FaceAttack/FA_High_13.png","Images/boss/carnation/FaceAttack/FA_High_14.png","Images/boss/carnation/FaceAttack/FA_High_15.png","Images/boss/carnation/FaceAttack/FA_High_13.png","Images/boss/carnation/FaceAttack/FA_High_14.png","Images/boss/carnation/FaceAttack/FA_High_15.png","Images/boss/carnation/FaceAttack/FA_High_13.png","Images/boss/carnation/FaceAttack/FA_High_14.png","Images/boss/carnation/FaceAttack/FA_High_15.png","Images/boss/carnation/FaceAttack/FA_High_16.png","Images/boss/carnation/FaceAttack/FA_High_17.png","Images/boss/carnation/FaceAttack/FA_High_18.png","Images/boss/carnation/FaceAttack/FA_High_19.png")
  bossFaceAttackLow = loadAnimation("Images/boss/carnation/FaceAttack/FA_Low_01.png","Images/boss/carnation/FaceAttack/FA_Low_02.png","Images/boss/carnation/FaceAttack/FA_Low_03.png","Images/boss/carnation/FaceAttack/FA_Low_04.png","Images/boss/carnation/FaceAttack/FA_Low_05.png","Images/boss/carnation/FaceAttack/FA_Low_06.png","Images/boss/carnation/FaceAttack/FA_Low_07.png","Images/boss/carnation/FaceAttack/FA_Low_08.png","Images/boss/carnation/FaceAttack/FA_Low_09.png","Images/boss/carnation/FaceAttack/FA_Low_10.png","Images/boss/carnation/FaceAttack/FA_Low_11.png","Images/boss/carnation/FaceAttack/FA_Low_12.png","Images/boss/carnation/FaceAttack/FA_Low_13.png","Images/boss/carnation/FaceAttack/FA_Low_14.png","Images/boss/carnation/FaceAttack/FA_Low_15.png","Images/boss/carnation/FaceAttack/FA_Low_16.png","Images/boss/carnation/FaceAttack/FA_Low_17.png","Images/boss/carnation/FaceAttack/FA_Low_18.png","Images/boss/carnation/FaceAttack/FA_Low_19.png","Images/boss/carnation/FaceAttack/FA_Low_20.png")
  bossFinalFormIntro = loadAnimation("Images/boss/carnation/FinalForm/Intro/Final_Intro_01.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_02.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_03.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_04.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_05.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_06.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_07.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_08.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_09.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_10.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_11.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_12.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_13.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_14.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_15.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_16.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_17.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_18.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_19.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_20.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_21.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_22.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_23.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_24.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_25.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_26.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_27.png","Images/boss/carnation/FinalForm/Intro/Final_Intro_28.png")
  bossFinalFormIdle = loadAnimation("Images/boss/carnation/FinalForm/Final_Idle_01.png","Images/boss/carnation/FinalForm/Final_Idle_03.png","Images/boss/carnation/FinalForm/Final_Idle_05.png","Images/boss/carnation/FinalForm/Final_Idle_07.png","Images/boss/carnation/FinalForm/Final_Idle_09.png","Images/boss/carnation/FinalForm/Final_Idle_11.png","Images/boss/carnation/FinalForm/Final_Idle_13.png","Images/boss/carnation/FinalForm/Final_Idle_15.png","Images/boss/carnation/FinalForm/Final_Idle_17.png",)
  bossFinalFormFP = loadAnimation("Images/boss/carnation/FinalForm/FiringPollen/FP_01.png","Images/boss/carnation/FinalForm/FiringPollen/FP_03.png","Images/boss/carnation/FinalForm/FiringPollen/FP_05.png","Images/boss/carnation/FinalForm/FiringPollen/FP_07.png","Images/boss/carnation/FinalForm/FiringPollen/FP_09.png","Images/boss/carnation/FinalForm/FiringPollen/FP_11.png","Images/boss/carnation/FinalForm/FiringPollen/FP_13.png","Images/boss/carnation/FinalForm/FiringPollen/FP_15.png","Images/boss/carnation/FinalForm/FiringPollen/FP_17.png","Images/boss/carnation/FinalForm/FiringPollen/FP_19.png","Images/boss/carnation/FinalForm/FiringPollen/FP_21.png")
  bossFinalFormDeath = loadAnimation("Images/boss/carnation/Death/Death_01.png","Images/boss/carnation/Death/Death_03.png","Images/boss/carnation/Death/Death_05.png","Images/boss/carnation/Death/Death_07.png","Images/boss/carnation/Death/Death_09.png","Images/boss/carnation/Death/Death_11.png")
  acorn = loadAnimation("Images/boss/carnation/CreatingObject/Acorn/Acorn_01.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_02.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_03.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_04.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_05.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_06.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_07.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_08.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_09.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_10.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_11.png","Images/boss/carnation/CreatingObject/Acorn/Acorn_12.png")
  boomerang = loadAnimation("Images/boss/carnation/CreatingObject/Boomerang/Boomerang_01.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_02.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_03.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_04.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_05.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_06.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_07.png","Images/boss/carnation/CreatingObject/Boomerang/Boomerang_08.png")
  seed = loadAnimation("Images/boss/carnation/FiringSeeds/SeedMissiles/Blue/Missile_B_01.png","Images/boss/carnation/FiringSeeds/SeedMissiles/Blue/Missile_B_02.png","Images/boss/carnation/FiringSeeds/SeedMissiles/Blue/Missile_B_03.png","Images/boss/carnation/FiringSeeds/SeedMissiles/Blue/Missile_B_04.png","Images/boss/carnation/FiringSeeds/SeedMissiles/Blue/Missile_B_05.png","Images/boss/carnation/FiringSeeds/SeedMissiles/Blue/Missile_B_06.png")
  vine = loadAnimation("Images/boss/carnation/FiringSeeds/Vines/Vine_C_01.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_02.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_03.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_04.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_05.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_06.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_07.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_08.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_09.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_10.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_11.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_12.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_13.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_14.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_15.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_16.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_17.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_18.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_19.png","Images/boss/carnation/FiringSeeds/Vines/Vine_C_20.png")


  bgFight = loadImage("Images/boss/fight_bg.png");

  heartImg = loadImage("Images/life.png");
}


function setup() {
  createCanvas(1270,600);
  player = new Player()
  
  ground = createSprite(width/2,500,width,40)
  ground.visible=false
  
  createInvisWalls();

  //Creating boss
  boss = new Boss()

  if(gamestate==="overworld"){
    player.player.x=400
    player.player.y=120

  }
  if(gamestate==="fight"){
    
    player.player.x = 200
    player.player.y = 400
    boss.boss.changeAnimation("Intro")
    
  }
  
}

function draw() {
  background(0);  
  //console.log([mouseX,mouseY]);
  
  if(gamestate==="overworld"){

      image(bgImg,-70,-80,1600,700)
      player.player.scale = 0.5;
      player.player.velocityY = 0;
      boss.boss.visible=false
      
     
      if(player.player.isTouching(flag)){
        
        player.player.x = 200
        player.player.y = 400

        gamestate = "fight";
      } 

    

      player.standingAnimations();
      player.move();

      drawSprites();
       


  }

  else if(gamestate==="fight"){
    image(bgFight,0,0,1270,600)
   
    boss.boss.visible=true
    player.player.scale=0.8
    player.player.velocityY += 0.8
    player.player.collide(ground);
    player.standingAnimations()
    player.shoot();

    boss.changeAnimations()    
    player.move();

    //boss.health --;
    //console.log("Boss health in sketch: " + boss.health)
    //BOSS GETTING ATTACKED
    player.bulletGroup.isTouching(boss.boss,function(bullet,b){
      bullet.destroy()
      console.log("boss health : "+boss.health);
      boss.health-=5;  
      console.log("Bullet hit")
    })
    drawSprites();

  }
  else if(gamestate==="end"){
    background("black")
    push()
    textSize(50)
    fill("white");
    stroke("red");
    text("You have lost",width/2-150,height/2)
    pop()
  }
  //console.log(player.x,player.y, gamestate)
  
 
}



  function createInvisWalls(){
    invisWallGroup=new Group()  
    invisWall=createSprite(width/2-15,height/2-85,375,5)
    invisWall.rotation=-30
    invisWall.visible = false;
    invisWallGroup.add(invisWall);
    invisWall2=createSprite(280,90,375,5)
    invisWall2.rotation=85
    invisWall2.visible = false;
    invisWallGroup.add(invisWall2);
    invisWall3=createSprite(400,270,205,5)
    invisWall3.rotation=-170
    invisWall3.visible = false;
    invisWallGroup.add(invisWall3);
    invisWall4=createSprite(500,40,500,5)
    invisWall4.rotation=-10
    invisWall4.visible = false;
    invisWallGroup.add(invisWall4);
    invisWall5=createSprite(850,45,400,5)
    invisWall5.rotation=15
    invisWall5.visible = false;
    invisWallGroup.add(invisWall5);
    invisWall6=createSprite(1000,280,400,5)
    invisWall6.rotation=90
    invisWall6.visible = false;
    invisWallGroup.add(invisWall6);
    invisWall7=createSprite(850,470,500,5)
    invisWall7.rotation=-45
    invisWall7.visible = false;
    invisWallGroup.add(invisWall7);
    invisWall8=createSprite(700,570,420,5)
    invisWall8.rotation=15
    invisWall8.visible = false;
    invisWallGroup.add(invisWall8);
    invisWall9=createSprite(780,210,240,5)
    invisWall9.rotation=-35
    invisWall9.visible = false;
    invisWallGroup.add(invisWall9);
    invisWall10=createSprite(840,130,150,5)
    invisWall10.rotation=6
    invisWallGroup.add(invisWall10);
    invisWall10.visible = false;

    invisWall11=createSprite(590,450,400,5)
    invisWall11.rotation=-60
    invisWallGroup.add(invisWall11);
    invisWall11.visible = false;
    
    
    flag=createSprite(820,210,40,40)
    flag.visible=false;
    
  }


