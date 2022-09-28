const getUser = async (req, res) => {
    return res.status(200).json({
        isSucess: true,
        isAuth: true,
        data: '로그인 상태입니다.'
    });
};
export default getUser;
//# sourceMappingURL=user.js.map