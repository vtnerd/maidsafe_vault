initSidebarItems({"fn":[["gen_keypair","`gen_keypair()` randomly generates a secret key and a corresponding public key."],["keypair_from_seed","`keypair_from_seed()` computes a secret key and a corresponding public key from a `Seed`."],["sign","`sign()` signs a message `m` using the signer's secret key `sk`. `sign()` returns the resulting signed message `sm`."],["sign_detached","`sign_detached()` signs a message `m` using the signer's secret key `sk`. `sign_detached()` returns the resulting signature `sig`."],["verify","`verify()` verifies the signature in `sm` using the signer's public key `pk`. `verify()` returns the message `Some(m)`. If the signature fails verification, `verify()` returns `None`."],["verify_detached","`verify_detached()` verifies the signature in `sig` against the message `m` and the signer's public key `pk`. `verify_detached()` returns true if the signature is valid, false otherwise."]],"constant":[["PUBLICKEYBYTES",""],["SECRETKEYBYTES",""],["SEEDBYTES",""],["SIGNATUREBYTES",""]],"struct":[["PublicKey","`PublicKey` for signatures"],["SecretKey","`SecretKey` for signatures"],["Seed","`Seed` that can be used for keypair generation"],["Signature","Detached signature"]]});