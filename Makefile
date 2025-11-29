
RLS_ASSETS = ".release_assets"
TLISTFILE = ".tlist"

all:

assets:
rm -rf .bedrock
	mkdir -p .bedrock
	cp -r .assets/* .bedrock

tlist:
	node ./.scripts/build_tlist.cjs $(RLS_ASSETS) $(TLISTFILE)

textures: assets tlist
	python ./.scripts/build_textures.py $(TLISTFILE)